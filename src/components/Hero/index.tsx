import { Component } from "react";

// Exemplo de componentes baseados em classes, não é mais tão utilizado aparece mais em legado
class Hero extends Component<{name: string}> {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export { Hero }