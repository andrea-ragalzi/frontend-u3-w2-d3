import Gallery from "./Gallery";

const MyMain = (props) => {
  const url = `${props.endPoint}${props.myKey}&s=`
  return (
    <main>
      <section>
        <Gallery title='Trending Now' source={`${url}${'jurassic%20park'}`}/>
        <Gallery title='Watch It Again' source={`${url}${'divergent'}`}/>
        <Gallery title='New Releases' source={`${url}${'star%20wars'}`}/>
      </section>
    </main>
  );
};

export default MyMain;
