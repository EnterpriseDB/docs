import os
import shutil

def source_docs():
    print('Pulling docs...')
    os.system('git clone -b main https://github.com/EnterpriseDB/docs-products.git sources/docs/')

if __name__ == '__main__':
    source_docs()
