import Layout from 'components/layout';
import Banners from 'components/banners';
import Hands from 'components/hands';

export default () => (
  <Layout>
    <Banners />
    <section className="introduction">
      <p>Hey guys (・_・)ノ real quick, count to 10 on your fingers! (I’ll wait.) Which finger did you start with? Have you ever even thought about that?</p>
      <p>Well, I have.</p>
      <p>I’m asking people around the world to tell me how they count on their fingers (aka dactylonomy). Because everyone does it differently. And until now, there’s no real information on it.</p>
      <p>So, lend me a hand by selecting from the below gifs the way you count. If you don’t see the hand that represents how you count, please select the mystery hand & give me the details of how you do it! I’ll really appreciate it, thank you!!</p>
    </section>
    <Hands />
    <style jsx>{`
      @import './styles/variables.css';

      .introduction {
        font-family: 'ACaslonPro';
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        margin: 0 2.8rem;
        padding-top: 6.5rem;
        color: black;
        text-align: center;
        font-size: 1.8rem;
        line-height: 1.11;
        max-width: 109.7rem;
      }

      .introduction p {
        margin: 1rem 0;
      }
    `}</style>
  </Layout>
);
