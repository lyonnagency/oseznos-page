import * as rules from 'vee-validate/dist/rules';
import es from 'vee-validate/dist/locale/es.json';
import Vue from 'vue';
import { ValidationProvider, extend, ValidationObserver} from 'vee-validate';
// loop over all rules
for (let rule in rules) {
  // add the rule
  extend(rule,
    {
      ...rules[rule],
      message: es.messages[rule]
    }
  );
}
// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
