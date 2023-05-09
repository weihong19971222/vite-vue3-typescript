const DARK_BLUE = "#0E3359"
const TERRA_YELLOW = "#EFB134"
const BLUE = "#1961B6"

export function btnStyle (isDisabled:Boolean,style:String) {
  if(isDisabled)
    return {
      'color':'#FFFFFF',
      'backgroundColor':'#818181'
    }
  switch(style){
    case 'terraYellow':
      return {
        'color':'#0E3359',
        'backgroundColor':TERRA_YELLOW
      }
    case 'darkBlue':
        return {
          'color':'#FFFFFF',
          'backgroundColor':DARK_BLUE
        }
    default:
      return {
        'color':'#FFFFFF',
        'backgroundColor':BLUE
      }
  }
}