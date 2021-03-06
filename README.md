# react-function-components

## Módulo 1

- Como criar um `Function Component` e quais suas diferenças para os `Class Components`
- Material UI

## Módulo 2

- Explorando o Material UI
- `FormControlLabel`, `Box`, `TextField`, `Switch`

## Módulo 3

- Formulários controlados e não controlados
- useState
- Assincronicidade da função de atribuição do estado

## Módulo 4

- Regras de utilização dos Hooks
  1. Devemos utilizar hooks apenas no nível superior
  2. Devemos utilizar hooks apenas dentro de funções do React

- Propriedade `checked` para Switchs
- Recebendo `props` em um componente de função e Injeção de dependências

Em vez de receber pelo `this.props` como na abordagem de classes, recebemos pelo parâmetro da função de componente. Mas sem o typescript, ainda não conseguimos acessar as propriedades de forma dinâmica.

Sobre a injeção de dependências, nesse caso foi basicamente passar a função `aoEnviarForm` na propriedade `aoEnviar` para o componente `FormularioCadastro`. Com isso, tornamos o componentes `FormularioCadastro` mais **reutilizável**, pois agora quem estiver **chamando** o formulário irá decidir o que fazer quando ele for submetido, ou seja, atribuir uma função personalizada para a propriedade `aoEnviar`. De todo modo, seria necessário fazer isso para utilizar as informações do formulário no componente pai, que é o `App.js`.

## Módulo 5

- Propriedades `error` e `helperText` do `TextField` do MaterialUI
- Usando estado para controlar a exibição de erros
- Recebendo validação de maneira externa

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
