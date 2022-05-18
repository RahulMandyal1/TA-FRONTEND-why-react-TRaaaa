import data from "../data";
import PropTypes from 'prop-types';

function Articles() {
  return (
    <section className="articles-section">
      {data.map((article) => {
        return <Article articleData={article} />;
      })}
    </section>
  );
}

function Article(props) {
  let article = props.articleData;
  return (
    <div className="flex-30">
      <figure>
        <img src={article.urlToImage} />
      </figure>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <a href={article.url}> Read more</a>
    </div>
  );
}
// to get  a useful error we  are checking types of props
Article.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
};
export default Articles;
