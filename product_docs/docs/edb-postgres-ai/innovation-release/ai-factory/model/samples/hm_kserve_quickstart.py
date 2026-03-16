import os, sys, json, httpx

BASE=os.getenv("EDB_API_URL","").rstrip("/")
TOKEN=os.getenv("EDB_API_TOKEN","")
ISVC=os.getenv("INFERENCESERVICE_ID","")
MODEL=os.getenv("MODEL_NAME","nvidia/llama-3.3-nemotron-super-49b-v1")
OPENAPI_FILE=os.getenv("OPENAPI_FILE","")

HEADERS={"Authorization":f"Bearer {TOKEN}","Accept":"application/json","Content-Type":"application/json"}

def load_docs():
  if not OPENAPI_FILE:
    print("warning: no OPENAPI_FILE provided; LLM has no API docs context")
    return "No API docs available."
  try:
    with open(OPENAPI_FILE,"r",encoding="utf-8") as f:
      spec=json.load(f)
    trimmed={"paths":spec.get("paths",{}),"tags":spec.get("tags",[])}
    return json.dumps(trimmed,ensure_ascii=False)[:6000]
  except Exception as e:
    print(f"warning: failed to read OPENAPI_FILE: {e}")
    return "No API docs available."

def chat(messages):
  body={"model":MODEL,"messages":messages,"max_tokens":4096}
  with httpx.Client(base_url=BASE,headers=HEADERS,timeout=60) as c:
    r=c.post(f"/inferenceservices/{ISVC}/v1/chat/completions",json=body)
    r.raise_for_status()
    return r.json()["choices"][0]["message"]["content"].strip()

def main():
  docs=load_docs()
  messages=[
    {"role":"system","content":"You are an API helper for engineers."},
    {"role":"system","content":"Here are the API docs:\n"+docs},
  ]
  print("API helper chat. Commands: /reset, /exit")
  try:
    while True:
      user=input("> ").strip()
      if not user: continue
      if user=="/exit": break
      if user=="/reset":
        messages=messages[:2]
        print("(reset to API docs)")
        continue
      messages.append({"role":"user","content":user})
      try:
        reply=chat(messages)
      except Exception as e:
        print(f"[error] {e}")
        messages.pop()
        continue
      messages.append({"role":"assistant","content":reply})
      print(reply)
  except KeyboardInterrupt:
    print()

if __name__=="__main__":
  main()
