import axios from 'axios'
import "../style/main.css"
import CustomInput from './Date'
import SelectSmall from './Selectcar'
import React, {useState} from 'react'
import Selectgroup from './Selectgroup'
import IsCellEditableGrid from './Table'
import MultilineTextFields from './Input'
import SelectLabels from './Selectoption'
import "../style/components/payment.scss"
import UploadButtons from "../Components/Images"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object()
  .shape({
    ad: yup.string().required(),
    surname: yup.string().required(),
  })
  .required();




const Payment = () => {

    // !validation
    const { handleSubmit, submit,errors } = useForm({
      resolver: yupResolver(schema),
    });

    const submitForm=(datas)=>{console.log(datas)};

    const [user, setusername]=useState({
    ad:"",
    surname:"",
    telim:"",
    group:"",
    amount:"",
    month:"",
    history:"",
  })
  
  const handlechange=(e)=>{
          setusername({...user,[e.target.name]: e.target.value})
      }
      const register=()=>{
          axios.post("http://localhost:9000/create-data",user).then(res=>{
            console.log(res)
          })
          }
            const { ad,surname,group,telim,amount,month,history}=user;

  return (
    <div className="form">
    <div className='container'>
      <div className="all">
      <h1 style={{ fontWeight: 'bold' }}>Ingress ödəniş portalı</h1>
      <form onSubmit={handleSubmit(submitForm)}>
      {/* AD Soyad */}
      <div className="person-information">
        <div className="name">
          <MultilineTextFields className="ad shadow-md" label="Ad" name="ad" value={ad} onChange={handlechange} ref={submit}
           />
           {/* <p>{errors.ad?.message}</p> */}
          <MultilineTextFields className="soyad shadow-md" label="Soyad" name="surname" value={surname} onChange={handlechange} ref={submit}/>
        </div>

        {/* Odenis pul */}
        <div className="card-name">
          <SelectSmall className="amountof shadow-md"/>
          <MultilineTextFields className="amount shadow-md" label="Ödənilən məbləğ" name="amount" value={amount} onChange={handlechange}/>
        </div>
      </div>

      {/*Telim ve qrup */}
      <div className="group">
        <div className="telim">
        <div><SelectLabels className="shadow-md" name="group" value={group} onChange={handlechange}/></div>
        <div><Selectgroup className="shadow-md" name="telim" value={telim} onChange={handlechange}/></div>
        </div>
        
        {/* Aylar */}
        <div className="amount">
        <div><MultilineTextFields label="Ay(lar)" className="ay shadow-md" name="month" value={month} onChange={handlechange}/></div>
        </div>
      </div>
      {/* Ayin tarixi */}
      <div className="month">
      <div className='tarix'><CustomInput className="date shadow-md" name="history" value={history} onChange={handlechange} /></div>
      <div className='images'><UploadButtons className="shadow-md"/></div>
      </div>  
        </form>


     
        <div>
          <button onClick={register} className="submit">Submit</button>
        </div> 
    </div>
    <div className='table'>
      <IsCellEditableGrid/>
    </div>
    </div>
    </div>
  )
}

export default Payment
