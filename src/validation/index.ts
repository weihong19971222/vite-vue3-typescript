
const STR = "string"
const NUM = "number"
const BOOL = "boolean"

const MIN = "min:"
const MAX = "max:"


interface validateItem {
    data: any;
    validate: string;
    translate: string;
}

export function validate (data: Array<validateItem>):string {
    let errorMsg = ""
    data.forEach((item:validateItem)=>{
        const data = item.data
        const dataTYpe = typeof data
        let errorMsgItem = ""
        item.validate.split('|').forEach((v)=>{            
            switch(v){
                case STR:
                    if(dataTYpe !== STR){
                        errorMsgItem += ' 必須是字串'
                    }
                    break;
                case NUM:
                    if(dataTYpe !== STR){
                        errorMsgItem += ' 必須是數值'
                    }
                    break;
                case BOOL:
                    if(dataTYpe !== STR){
                        errorMsgItem += ' 必須是布林值'
                    }
                    break;
                default:
                    if(v.includes(MIN)){
                        const len = v.replace(MIN,'')
                        if(dataTYpe === STR && data.length < len){
                            errorMsgItem += ` 最少${len}碼`
                        }
                        if(dataTYpe === NUM && data < len){
                            errorMsgItem += ` 不能小於${len}`
                        }                        
                    }
                    if(v.includes(MAX)){
                        const len = v.replace(MAX,'')
                        if(dataTYpe === STR && data.length > len){
                            errorMsgItem += ` 最多${len}碼`
                        }
                        if(dataTYpe === NUM && data > len){
                            errorMsgItem += ` 不能大於${len}`
                        }       
                    }
            }
        })
        if(errorMsgItem !== ''){
            errorMsg += item.translate + errorMsgItem + '\n'
        }
    })
    return errorMsg
}

