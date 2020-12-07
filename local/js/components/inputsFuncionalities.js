export function floatLabel() {
       
    floatLabelFunctionality(element){
        element.addEventListener('click', (e) => {
            // function para activar el float label
            var that = e.target;
            if(that.tagName == 'LABEL' && !that.classList.contains('CE-item__label--active')){
                that.classList.add('CE-item__label--active');
            }
        })
        //'CE-item__input--float'
        element.getElementsByClassName('CE-item__input--float')[0].addEventListener('focusout', (e) => {
            // function para desactivar el float label
            var that = e.target,
                idElement = that.getAttribute('id'),
                labelSibling = document.querySelector('[for="'+idElement+'"]');
            if(that.value == ''){
                labelSibling.classList.remove('CE-item__label--active')
            }
        });
    }
}