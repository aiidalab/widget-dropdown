# widget-dropdown

[![PyPI - Version](https://img.shields.io/pypi/v/widget-dropdown?color=4CC61E)](https://pypi.org/project/widget-dropdown/)

## Installation

```sh
pip install widget-dropdown
```

## Development installation

Install the python code:

```sh
pip install -e .[dev]
```

You then need to install the JavaScript dependencies and run the development server.

```sh
npm install
npm run dev
```

Open `example.ipynb` in JupyterLab, VS Code, or your favorite editor
to start developing. Changes made in `js/` will be reflected
in the notebook.

## Making a new release

- Update version in `pyproject.toml` & `git commit`
- Create a corresponding git tag (`git tag vX.Y.Z`)
- Push to Github (`git push && git push --tags`), which will start the Github Action to create a Github Release & publish the new version to PYPI.
