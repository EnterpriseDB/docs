import os
import shutil

if not os.path.exists('docs/.git'):
    shutil.rmtree('docs')
    os.system('git clone -b eb-master-2 https://github.com/rocketinsights/edb_docs.git docs')
