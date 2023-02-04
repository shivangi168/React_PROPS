import react from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import './index.css';
import Sdata from './Sdata.jsx';
// import createRoot from 'create-root';
// console.log(Sdata[0].sname);
function nfunc(val){
  return(
  <Card
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
}

ReactDOM.render(
<>
<h1 className='"heading_style'>List of top 5 netflix series</h1>
{/* {Sdata.map(nfunc)} */}
{Sdata.map(function nfunc(val){
  return(
  <Card
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
})}

{Sdata.map((val)=>{
  return(
  <Card
  imgsrc={val.imgsrc}
  title={val.title}
  sname={val.sname}
  link={val.link}
  />
  );
})}





<Card
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}
/>
<Card
  imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].link}
/>
<Card
  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].link}
/>
<Card
  imgsrc={Sdata[3].imgsrc}
  title={Sdata[3].title}
  sname={Sdata[3].sname}
  link={Sdata[3].link}
/>
<Card
  imgsrc={Sdata[4].imgsrc}
  title={Sdata[4].title}
  sname={Sdata[4].sname}
  link={Sdata[4].link}
/>
<Card
  imgsrc={Sdata[5].imgsrc}
  title={Sdata[5].title}
  sname={Sdata[5].sname}
  link={Sdata[5].link}
/>

</> ,
  document.getElementById('root')
);


  {/* <Card imgsrc="https://wallpaperaccess.com/full/1605503.jpg"
    title=" A Netflix Original  Series "
    sname="Dark"
    link="https://www.netflix.com/in/title/80100172"
  />
  <Card 
  imgsrc="https://www.heavenofhorror.com/wp-content/uploads/2020/04/Extracurricular-netflix-review.jpg"
  title="A Netflix Original  Series"
  sname="Extra Curricular"
  link="https://www.netflix.com/in/title/80990668?source=35"
  />
  <Card 
  imgsrc="https://assets.gadgets360cdn.com/pricee/assets/product/202111/StrangerThings1-250_1636639727.jpg"
  title="A Netflix Original  Series"
  sname="Stranger Things"
  link="https://www.netflix.com/in/title/80057281"
  />
  <Card 
  // imgsrc="https://images.indianexpress.com/2018/04/lost-in-space-759.jpg"
  imgsrc="https://i.pinimg.com/736x/58/71/52/587152adffc476276916f8e5ff0817bc.jpg"
  title="A Netflix Original  Series"
  sname="Lost in space"
  link="https://www.netflix.com/in/title/80104198"
  />
  <Card 
  // imgsrc="https://flxt.tmsimg.com/assets/p10700229_b1t_v9_aa.jpg"
  imgsrc="https://ntvb.tmsimg.com/assets/p10700229_b_h10_aa.jpg?w=1280&h=720"
  title="A Netflix Original  Series"
  sname="vampire Diaries"
  link="https://www.netflix.com/in/title/70143860"
  />
<Card 
  imgsrc="https://m.media-amazon.com/images/M/MV5BOTUzMTMzNTgtNmI5NS00ZTI1LTgzMjYtZTFkZWZkYTE0MWMyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
  title="A Netflix Original  Series"
  sname="MisMatched"
  link="https://www.netflix.com/in/title/80220079"
  />
 */}


// </> ,
//   document.getElementById('root')
// );
