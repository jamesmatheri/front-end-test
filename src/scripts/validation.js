export function validatePipeline(input, rules) {


  let errors =[];

  rules.forEach( rule  => {
    if(!rule.validate(input)){
      errors.push(rule.message)
    }
  })

  return {
    isValid: errors.length === 0,
    errors
  }
}

