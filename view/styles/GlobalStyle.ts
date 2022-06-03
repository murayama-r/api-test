import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
}

html,
body {
  color: #222;
  font-family: 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ',
    Meiryo, sans-serif;
  font-size: 16px;
}

ol,
ul {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input {
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0;
  margin: 0;
}

/* 上記と分けて記述しない場合EdgeでCSS Resetが効かなくなるので注意 */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  appearance: none;
  background: transparent;
  border: 0;
  border-radius: 0;
  margin: 0;
}
`;
