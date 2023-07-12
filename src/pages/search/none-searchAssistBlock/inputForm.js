import React from "react";
import { Formik, Form, Field } from 'formik';
import './style.css';
import classnames from "classnames";
import * as Yup from 'yup';
import {Checkbox} from "@mui/material";
import { FormControlLabel } from '@mui/material';
import getRequest from "../../../store/result"

function validateInn(value) {
	let error = 'Введите корректные данные'
    if(typeof value !== 'string'){
		return error;
	}
	
	if(value.length !== 10){
		return error;
	}
	
	const arNumbers = value.split('');
	if(arNumbers.length === 0){
		return error;
	}
	
	for(let symbol of arNumbers){
		if(isNaN(Number(symbol))){
			return error;
		}
	}
	
	if(arNumbers.length === 10){
		let checkSum;
		
		checkSum = ((
			2 * arNumbers[0] +
			4 * arNumbers[1] +
			10 * arNumbers[2] +
			3 * arNumbers[3] +
			5 * arNumbers[4] +
			9 * arNumbers[5] +
			4 * arNumbers[6] +
			6 * arNumbers[7] +
			8 * arNumbers[8]
		) % 11 ) % 10;
		
		if(checkSum === Number(arNumbers[9])){
			return '';
		}else{
			return error;
		}
	}

}

function validateQty(value) {
	let error = 'Введите корректные данные'
	if(value > 1000 || value < 1){
		return error;
	}
	if(typeof value !== 'string'){
		return error;
	}
	const arNumbers = value.split('');
	if(arNumbers.length === 0){
		return error;
	}
	for(let symbol of arNumbers){
		if(isNaN(Number(symbol))){
			return error;
		}
	}
}

const validationSchema = Yup.object().shape({
	startDate: Yup.date().required('Введите корректные данные'),
	endDate: Yup.date()
	  .required('Введите корректные данные')
	  .min(Yup.ref('startDate'), 'Введите корректные данные')
}); 
//как по кнопке перейди на другую страницу, через props прокинуть useState ?

const InputForm = () => (
    <div>
      <Formik
        initialValues={{
          inn: '',
					limit: '',
		  		startDate: '',
		  		endDate: '',
					tonality: 'any',
					maxFullness: false, 
					inBusinessNews: null, 
					onlyMainRole: false,
          onlyWithRiskFactors: false, 
					excludeTechNews: false, 
					excludeAnnouncements: false, 
					excludeDigests: false, 
        }}
		validationSchema={validationSchema}
		onSubmit={async(values, {setSubmitting}) => {
			setSubmitting(true) 
			await getRequest(values) 
			setSubmitting(false)
		}}
      >
        {({ errors, values, control }) => (
        <Form className="assist"> 
			<div className="search-input-block">
				<p className="search-input-block-text">ИНН компании*</p>
				<Field className={classnames('search-input-block-input', {[ 'errorInput' ]: errors.inn})}
				name="inn" validate={validateInn}  placeholder="10 цифр"
				/>
				{errors.inn && <div className='red'>{errors.inn}</div>}

				<div className="select-wrapper">
					<label htmlFor="tonality" className="search-input-block-text">Тональность</label>
					<Field
						required
						className="search-input-block-input-select"
						id="tonality"
						name="tonality"
						as="select">
							
						<option value="any">Любая</option>
						<option value="negative">Негативная</option>
						<option value="positive">Позитивная</option>
					</Field>
			  </div>

			    <p className="search-input-block-text">Количество документов в выдаче*</p> 
				<Field
				className={classnames('search-input-block-input', {[ 'errorInputQ' ]: errors.limit})}
				name="limit" validate={validateQty} placeholder="От 1 до 1000"
				/>
				{errors.limit && <div className='red'>{errors.limit}</div>}

				<div className="search-diapason-block">
					<p className="search-input-block-text diapason">Диапазон поиска*</p>
					<div className='diapason-input'>
						<Field                   
						className={classnames('search-input-block-date', {[ 'errorDateStart' ]: errors.endDate})} name="startDate"
						type="date" placeholder="Дата начала" 
						value={values.startDate} />
						
						<Field className={classnames('search-input-block-date', {[ 'errorDateEnd' ]: errors.endDate})}
						name="endDate" type="date" placeholder="Дата конца"
						value={values.endDate} />
						{errors.endDate && <div className='redDate'>{errors.endDate}</div>}                               
					</div>              
				</div> 
			</div>
			<div className='options-block-on-block'>
			<div className="checkboxes-block"><div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Field name="maxFullness"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Признак максимальной полноты"
          />
          <FormControlLabel
            control={
              <Field
                name="inBusinessNews"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Упоминания в бизнес-контексте"
          />
          <FormControlLabel
            control={
              <Field
                name="onlyMainRole"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Главная роль в публикации"
          />         
          <FormControlLabel
            control={
              <Field
                name="onlyWithRiskFactors"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Публикации только с риск-факторами"
          />
          <FormControlLabel
            control={
              <Field
                name="excludeTechNews"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Включать технические новости рынков"
          />
          <FormControlLabel
            control={
              <Field
                name="excludeAnnouncements"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Включать анонсы и календари"
          />
          <FormControlLabel
            control={
              <Field
                name="excludeDigests"
                control={control}
                render={({ field }) => <Checkbox {...field} />}
              />
            }
            label="Включать сводки новостей"
          />
          
        </div>
      </div>
			</div>
				<div className='button_get_search'>
					<button type="submit" className="get_search">Поиск</button>
					<p className="get_search-worn">* Обязательные к заполнению поля</p>
				</div>
    		</div>       
        </Form>
        )}
      </Formik>
    </div>
);

export {InputForm}