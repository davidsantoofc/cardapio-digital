import PropTypes from 'prop-types';

export function ItemCardapio(props) {
  return (
    <div className="container-item-cardapio">
      <div>
        <h2>{props.nome}</h2>
        <p>{props.preco}</p>
        <p>{props.descricao}</p>
      </div>
      <div>
        <img src={props.imagem} alt={props.nome} />
      </div>
    </div>
  );
}

ItemCardapio.propTypes = {
  nome: PropTypes.string.isRequired,
  preco: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
};
