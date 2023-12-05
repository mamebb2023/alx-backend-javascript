export default function cleanSet(set, startString){
    if (!startString){
        return '';
    }
    const string = [];
    for (const e of set){
        if (e.startsWith(startString)){
            string.push(e.slice(startString.length));
        }
    }
    return string.join('-');
}