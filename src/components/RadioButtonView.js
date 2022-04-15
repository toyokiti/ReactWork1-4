

const RadioButtonView = () => {

    return (
        <div className="radiobuttonArea">
        <input type="radio" name="radiobutton" value="all" checked="checked" />すべて
        <input type="radio" name="radiobutton" value="working" />作業中
        <input type="radio" name="radiobutton" value="complete" />完了
    </div> 
    );
    
}

export default RadioButtonView;