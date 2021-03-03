import fileinput

print('cleaning up legacy redirects')

nginx_file = 'static/nginx_redirects.generated'
for line in fileinput.input(files=[nginx_file], inplace=1):
  if line.startswith('rewrite ^/docs/edb-docs/'):
    print(line.strip().replace('/docs/edb-docs/', '/edb-docs/'))

print('see nginx redirects file at `static/nginx_redirects.generated`')
