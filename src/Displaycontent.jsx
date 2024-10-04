/* eslint-disable react/prop-types */
 

function Displaycontent({props}) {

     
  return (
    <div>
       <h3>Displaying Multiple Names and Addresses</h3>

            {
            props?.length>0? (
                props.map((prop, index) => {
          return (
            <div key={index}>
              <h1>{prop.name}</h1>
              <h2>{prop.address}</h2>
            </div>
          );
        })
            ):(
                <p>No data to display</p>
            )
        }
     </div>
  ) 
}

export default Displaycontent ;