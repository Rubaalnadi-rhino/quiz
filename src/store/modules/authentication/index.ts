import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            login:false,
            user : [
                {
                    id : 1,
                    email : "rubaalnadi5@gmail.com",
                    password : "123"
                }
            ],
        };
    },
    mutations,
    actions,
    getters
};
