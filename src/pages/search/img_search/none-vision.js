// import React from "react";
// import { Formik, Form, Field } from 'formik';
// import styles from './searchAssistBlock/style.css';
// import classnames from "classnames"

// function validateInn(value) {
// 	let error = 'Введите корректные данные'
//     if(typeof value !== 'string'){
// 		return error;
// 	}
	
// 	if(value.length !== 10 && value.length !== 12){
// 		return error;
// 	}
	
// 	const arNumbers = value.split('');
// 	if(arNumbers.length === 0){
// 		return error;
// 	}
	
// 	for(let symbol of arNumbers){
// 		if(isNaN(Number(symbol))){
// 			return error;
// 		}
// 	}
	
// 	if(arNumbers.length === 10){
// 		let checkSum;
		
// 		checkSum = ((
// 			2 * arNumbers[0] +
// 			4 * arNumbers[1] +
// 			10 * arNumbers[2] +
// 			3 * arNumbers[3] +
// 			5 * arNumbers[4] +
// 			9 * arNumbers[5] +
// 			4 * arNumbers[6] +
// 			6 * arNumbers[7] +
// 			8 * arNumbers[8]
// 		) % 11 ) % 10;
		
// 		if(checkSum === Number(arNumbers[9])){
// 			return '';
// 		}else{
// 			return error;
// 		}
		
// 	}else if(arNumbers.length === 12){
// 		let checkSumOne, checkSumTwo;
		
// 		checkSumOne = ((
// 			7 * arNumbers[0] +
// 			2 * arNumbers[1] +
// 			4 * arNumbers[2] +
// 			10 * arNumbers[3] +
// 			3 * arNumbers[4] +
// 			5 * arNumbers[5] +
// 			9 * arNumbers[6] +
// 			4 * arNumbers[7] +
// 			6 * arNumbers[8] +
// 			8 * arNumbers[9]
// 		) % 11 ) % 10;
		
// 		checkSumTwo = ((
// 			3 * arNumbers[0] +
// 			7 * arNumbers[1] +
// 			2 * arNumbers[2] +
// 			4 * arNumbers[3] +
// 			10 * arNumbers[4] +
// 			3 * arNumbers[5] +
// 			5 * arNumbers[6] +
// 			9 * arNumbers[7] +
// 			4 * arNumbers[8] +
// 			6 * arNumbers[9] +
// 			8 * arNumbers[10]
// 		) % 11 ) % 10;
		
// 		if(checkSumOne === Number(arNumbers[10]) &&
// 			checkSumTwo === Number(arNumbers[11]))
// 		{
// 			return '';
			
// 		}else if(checkSumOne !== Number(arNumbers[10])){
// 			return error;
			
// 		}else if(checkSumTwo !== Number(arNumbers[11])){
// 			return error;
// 		}
// 	}

// }

// function validateQty(value) {
// 	let error = 'Введите корректные данные'
// 	if(value > 1000 || value < 1){
// 		return error;
// 	}
// 	if(typeof value !== 'string'){
// 		return error;
// 	}
// 	const arNumbers = value.split('');
// 	if(arNumbers.length === 0){
// 		return error;
// 	}
// 	for(let symbol of arNumbers){
// 		if(isNaN(Number(symbol))){
// 			return error;
// 		}
// 	}
// }

// const InputForm = () => (
//     <div>
//       <Formik
//         initialValues={{
//           inn: '',
// 		  qty: '',
// 		  todate: '',
// 		  fromdate: ''
//         }}
//         onSubmit={(values) => {
//             console.log(values)
//           }}
//       >
//         {({ errors }) => (
//         <Form className={styles.assist}>
// 			<div className={styles.search-input-block}>
// 				<p class={styles.search-input-block-text}>ИНН компании*</p>
// 				<Field className={classnames(styles.search-input-block-input, {[styles.errorInput]: errors.inn})}
// 				name="inn" validate={validateInn}  placeholder="10 цифр"
// 				/>
// 				{errors.inn && <div>{errors.inn}</div>}

// 			    <p class={styles.search-input-block-text}>Тональность</p>
// 				<div className={styles.select-wrapper}>
// 					<select name='select' className={styles.search-input-block-input-select}>
// 						<option className={styles.input-mode} value="1">Любая</option>
// 						<option className={styles.input-mode} value="2">Негативная</option>
// 						<option className={styles.input-mode} value="3">Позитивная</option>
// 					</select>
// 				</div>

// 			    <p class={styles.search-input-block-text}>Количество документов в выдаче*</p> 
// 				<Field
// 				className={styles.search-input-block-input}
// 				name="qty" validate={validateQty} placeholder="От 1 до 1000"
// 				/>
// 				{errors.qty && <div>{errors.qty}</div>}

// 				<div className={styles.search-diapason-block}>
// 					<p className={styles.search-input-block-text}>Диапазон поиска*</p>
// 					<div className={styles.diapason-input}>                   
// 						<input className={styles.search-input-block-date} type="date" placeholder="Дата начала" />
// 						<input className={styles.search-input-block-date} type="date" placeholder="Дата конца" />                               
// 					</div>              
// 				</div> 
// 			</div>
// 			<div className={styles.options-block-on-block}>
// 				<ul className={styles.options-block-on}>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb1" /><label for="cb1">Признак максимальной полноты</label></li>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb2" /><label for="cb2">Упоминания в бизнес-контексте</label></li>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb3" /><label for="cb3">Главная роль в публикации</label></li>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb4" /><label for="cb4">Публикации только с риск-факторами</label></li>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb5" /><label for="cb5">Включать технические новости рынков</label></li>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb6" /><label for="cb6">Включать анонсы и календари</label></li>
// 					<li className={styles.option_checkbox}><input className="option" type="checkbox" id="cb7" /><label for="cb7">Включать сводки новостей</label></li>
// 				</ul>
// 				<div className={styles.button_get_search}>
// 					<button className={styles.get_search}>Поиск</button>
// 					<p className={styles.get_search-worn}>* Обязательные к заполнению поля</p>
// 				</div>
//     		</div>       
//         </Form>
//         )}
//       </Formik>
//     </div>
// );
