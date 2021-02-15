from ._version import version_info, __version__

from .amphion import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter-amphion',
        'require': 'jupyter-amphion/extension'
    }]

def _jupyter_labextension_paths():
    return [{
        'src': 'labextension',
        'dest': '@robostack/jupyter-amphion',
    }]

# def _jupyter_server_extension_paths():
#     return [{
#         "module": "jupyter_amphion"
#     }] 
