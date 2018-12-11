function getFromData(ele) {
    var details = {};
    $(ele).find('input').each(function () {
        var name = (this.name || '').replace(/^\s*|\s*&/, '');
        if(this.type === 'text'){
            // if($(this).hasClass('layui-unselect')){
            //
            // }
            details[name] = $(this).val();
        }else if(this.type === 'checkbox'){
            var layEle = $(this).next();
            if(layEle.hasClass('layui-form-checked')){
                details[name] = true;
            }
        }else if(this.type === 'radio') {
            var layEle = $(this).next();
            if(layEle.hasClass('layui-form-radioed')){
                details[name] = true;
            }
        }
    });
    return details;
}