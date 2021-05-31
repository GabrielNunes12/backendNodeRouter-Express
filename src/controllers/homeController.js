exports.cadastro = (req, res) => {
  res.send(`
    <form action="/registro/:idRegistro" method="POST">
      <label> Name: </label>
      <input type="text" name="name" placeholder="your name"/>
      <button> Enviar </button>
    </form>
  `)
}

exports.showRegistro = (req, res) => {
  res.send(req.params.idRegistro.value);
}