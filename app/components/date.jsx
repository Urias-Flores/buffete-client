import { Form } from '@remix-run/react';
import {formattedDate} from "../utils/helpers";

export default function Date ({ date, selectedDate, setSelectedDate }){
  const { DateID, Issue, DateTime, User, Client, State } = date
  return (
    <div
      className={`date ${selectedDate.DateID === DateID ? 'active' : ''}`}
      onClick={ () => { setSelectedDate( date?.DateID === selectedDate?.DateID ? {} : date) } }
    >
      <div>
        <div className='date-issue'>
          <span>Asunto</span>
          <p>{ Issue }</p>
        </div>

        <div className='information'>
          <div className='information-item'>
            <span>Encargado</span>
            <p>{User?.Name}</p>
          </div>

          <div className='information-item'>
            <span>Cliente</span>
            <p>{Client?.Name}</p>
          </div>

          <div className='information-item'>
            <span>Fecha</span>
            <p>{ formattedDate(DateTime).split(',')[0] }</p>
          </div>

          <div className='information-item'>
            <span>Hora</span>
            <p>{ formattedDate(DateTime).split(',')[1] }</p>
          </div>

          <div className='information-item'>
            <span>Estado actual</span>
            <div className='state'>
              <div className={`point ${State === 'P' ? '' : 'active'}`}></div>
              <p>{State === 'P' ? 'Pendiente' : 'Realizada'}</p>
            </div>
          </div>
        </div>
      </div>

      <Form method='PUT'>
        <input type="hidden" name='DateID' value={DateID}/>
        <input type="hidden" name='State' value={State}/>

        <input
          type="submit"
          value={`Marcar como ${State === 'P' ? 'realizada' : 'pendiente'}`}
          className='button center'
        />
      </Form>
    </div>
  )
}
