import bangladesh from 'static/hands/bangladesh/BANGLADESH.gif';
import centralEurope from 'static/hands/central-europe/C_Europe.gif';
import china from 'static/hands/china/CHINA.gif';
import japan from 'static/hands/japan/JAPAN.gif';
import northAmerica from 'static/hands/north-america/NA.gif';
import taiwan from 'static/hands/taiwan/TAIWAN.gif';  

export default () => (
  <div>
    <section className="hands">
      <img src={bangladesh} />
      <img src={centralEurope} />
      <img src={china} />
      <img src={japan} />
      <img src={northAmerica} />
      <img src={taiwan} />
    </section>
    <style jsx>{`
      .hands {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `}</style>
  </div>
);
