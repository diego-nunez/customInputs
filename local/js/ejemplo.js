import { select } from './components/_select.js';
import { radio_checkbox } from './components/_radio_checkbox.js';
import { general_inputs } from './components/_general_inputs.js';

select({
    "exclude": 'noSelected',
    "floatLabel": true
});

radio_checkbox({
    "exclude": 'noSelected'
})

general_inputs({
    "class": "customizeInput"
})


// var input = new customizeInputs({
//     exclude: 'noSelected',
//     general: 'customizeInput',
//     floatLabel: {
//         'select': true,
//         'general': true,
//         'excludeClasses': ['noFloatLabel']
//     }
// })

// input.customInputs();