import json
import os
import tempfile

from subprocess import check_call

HERE = os.path.abspath(os.path.dirname(__file__))


def packages_from_git(url, workdir, subdir=''):
    """Clones a git repo from URL into workdir and treats all folders under
    subdir as packages.
    """
    check_call(['git', 'clone', '--depth', '1', url, workdir])
    path = os.path.join(workdir, subdir)

    return [
        dict(label=name, value=name) for name in os.listdir(path)
        if (os.path.isdir(os.path.join(path, name))
            and not name.startswith('.'))
    ]


def main():
    outdir = os.path.join(os.path.dirname(__file__), '../src/datasets')

    with tempfile.TemporaryDirectory() as tmpdir:
        conda_packages = packages_from_git(
            'https://github.com/conda-forge/feedstocks.git', tmpdir,
            'feedstocks')
    with tempfile.TemporaryDirectory() as tmpdir:
        julia_packages = packages_from_git(
            'https://github.com/JuliaLang/METADATA.jl.git', tmpdir)

    with open(os.path.join(outdir, 'julia.json'), 'w') as f:
        json.dump(dict(packages=julia_packages), f)

    python_packages = [
        pkg for pkg in conda_packages if not pkg['value'].startswith('r-')
    ]
    with open(os.path.join(outdir, 'python.json'), 'w') as f:
        json.dump(dict(packages=python_packages), f)

    r_packages = [
        pkg for pkg in conda_packages if pkg['value'].startswith('r-')
    ]
    with open(os.path.join(outdir, 'r.json'), 'w') as f:
        json.dump(dict(packages=r_packages), f)


if __name__ == '__main__':
    main()