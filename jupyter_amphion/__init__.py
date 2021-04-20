from ._version import version_info, __version__

from .amphion import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'nbextension',
        'dest': '@robostack/jupyter-amphion',
        'require': '@robostack/jupyter-amphion/extension'
    }]

def _jupyter_labextension_paths():
    return [{
        'src': 'labextension',
        'dest': '@robostack/jupyter-amphion',
    }]

