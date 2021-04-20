from os import path

from jupyter_packaging import (
    create_cmdclass, install_npm, ensure_targets,
    combine_commands, ensure_python,
    get_version
)

from setuptools import setup, find_packages

# The name of the project
name = 'jupyter_amphion'
nb_ext_name = '@robostack/jupyter-amphion'
ext_name = '@robostack/jupyter-amphion'

HERE = path.dirname(path.abspath(__file__))
ext_path = path.join(HERE, 'js')

# Ensure a valid python version
ensure_python('>=3.6')

# Get our version
version = get_version(path.join(name, '_version.py'))

# Extensions' path
module_path = path.join(HERE, name)
nb_path = path.join(HERE, name, 'nbextension')
lab_path = path.join(HERE, name, 'labextension')

cmdclass = create_cmdclass(
    'js',
    package_data_spec = {
        name: [
            'nbextension/*',
            'labextension/*'
        ]
    },
    data_files_spec = [
        ('share/jupyter/nbextensions/' + nb_ext_name, nb_path, '**'),
        ('etc/jupyter/nbconfig/notebook.d', name, 'jupyter-amphion.json'),
        ("share/jupyter/labextensions/" + ext_name, lab_path, "**"),
    ]
)

cmdclass['js'] = combine_commands(
    install_npm(
        path=ext_path,
        npm=["jlpm"],
        build_cmd="build:labextension",
        source_dir=path.join(ext_path, 'lib')
    ),
    # Representative files that should exist after a successful build
    ensure_targets([
        path.join(nb_path, 'index.js'),
        # path.join(lab_path, 'package.json'),
    ]),
)

setup_args = {
    'name': name,
    'version': version,
    'description': 'ROS 3D Jupyter widget',
    'long_description': 'ROS 3D Jupyter widget',
    'author': 'Wolf Vollprecht',
    'author_email': 'w.vollprecht@gmail.com',
    'url': 'https://github.com/RoboStack/jupyter-amphion',
    'keywords': [
        'ipython',
        'jupyter',
        'widgets',
    ],
    'include_package_data': True,
    'install_requires': [
        'ipywidgets>=7.0.0',
        'bqplot',
        'numpy',
        'rospkg'
    ],
    'packages': find_packages(),
    'zip_safe': False,
    'cmdclass': cmdclass,
    'classifiers': [
        'Development Status :: 4 - Beta',
        'Framework :: IPython',
        'Intended Audience :: Developers',
        'Intended Audience :: Science/Research',
        'Topic :: Multimedia :: Graphics',
        'Programming Language :: Python :: 2',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
    ],
}

setup(**setup_args)