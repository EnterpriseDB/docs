---
title: Getting Started with Structures
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/structures/getting-started-with-structures/
lastModified: 2026-10-21T00:19:17Z
---

# Getting Started with Structures

When building AI-powered software, prompting or chatting with an LLM directly will only take you so far. You'll want programmatic control over application logic and the flow of data. In other words, you'll want to run code.

Here are some examples:

- Ensuring agents perform specific tasks consistently.
- Providing access to a specific set of data to query.
- Accessing other APIs, services, and tools.
- Processing user inputs and query responses before passing to an LLM.
- Defining how an LLM's outputs should be formatted and delivered.
- Prescribing a series of tasks in a deterministic order.
- Connecting multiple application components together.

## How to create a Structure

Gen AI Builder Samples are a quick and easy way to get started with Structures. Several samples are available in the [Griptape Samples on GitHub](https://github.com/griptape-ai/griptape-sample-structures) for you to try. Of course, you can also [write your own custom structure and deploy this from GitHub](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/structures/create-structure/) or follow a [Griptape Trade School](https://learn.griptape.ai/latest/courses/chatbot-rulesets/) course to build a simple rules-driven chatbot.

### Prerequisites:

For this example, you'll be able to compare outputs from OpenAI (GPT), Google (Gemini), or Anthropic (Claude) given the same input. You'll need API keys from at least one of those services to proceed.

You will also need a Gen AI Builder API key. Follow these steps to create one.

1. Navigate to the API Keys page in the Gen AI Builder Console.
2. Click _Create API key_.
3. Enter the name `GT_CLOUD_API_KEY`.
4. Click _Create_ to submit the form.
5. Copy the key value. Save it somewhere so that you can paste it later.
6. Click _I have saved the key_.

### Creating, deploying and running a Structure

Follow these steps to create, deploy, and run a Structure. You can follow similar steps to deploy another sample or your own custom structure.

1. Navigate to the Structures page in the Gen AI Builder Console.
2. Click _Create Structure_.
3. Select a Structure. For this example, choose _OpenAI vs. Google vs. Anthropic Model Comparison_.
4. (Optional) Give the Structure a name and description.
5. In the row labeled Key: `GT_CLOUD_API_KEY`, click the pencil (edit) icon.
6. Select _Create secret_ in the dropdown menu, then paste in your Gen AI Builder API key
7. Click _Save_ to store the key as a secret that will be encrypted and used in this Structure. For future Structures, you will be able to re-use the same key by selecting _Secret reference_.
8. Repeat the preceding three steps (5 , 6, and 7) for the row labeled Key: `OPENAI_API_KEY`, Key: `ANTHROPIC_API_KEY`, and/or Key: `GOOGLE_API_KEY` using the corresponding API keys. You only need to provide one of these unless you want to compare models against each other.
9. Click _Create_ to submit the form.

### What's Happening?

Once you have created the Structure, it will automatically begin deploying to Gen AI Builder. This process should take just a minute or two. While deployment is in progress, you will be directed to the Structure detail page where you can observe and track the deployment status as well as other details such as the GitHub repository and invocation URL.

After deployment is complete, your Structure is ready to run!

### Running your sample Structure

You can run Structures directly from the Gen AI Builder web console, via API, or through third party software applications. For this example, we will use the sample that you deployed above.

Follow these steps to run your structure.

1. Navigate to the Structures screen.

2. Select the structure you created from the list.

3. Click the _Runs_ tab.

4. Click _Create run_.

5. In the Arguments field, enter the following text. If you want to use a different model, replace the argument `openai` with `anthropic` or `claude`. Note that arguments must be entered one per line, so be sure to preserve the line breaks as shown here.

   ```bash
   -p
   openai
   -s
   software programming
   -a
   Genghis Khan
   ```

6. Click _Create_ to submit the form.

The structure will then begin running. It should take just a few seconds. During this time, you will see the input arguments and environment variables you provided. When the run completes you will see the resulting output, and you can also access the run logs for debugging purposes.

For more on running Structures, visit [Running a Structure](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/structures/run-structure/) to learn how to run your newly deployed Structure.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
