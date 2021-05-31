exports.cadastro = (req, res) => {
  res.render('index');
}

exports.showRegistro = (req, res) => {
  res.send(req.params.idProduto);
}