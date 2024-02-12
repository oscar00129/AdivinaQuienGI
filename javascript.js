const app = Vue.createApp({
    data() {
        return {
            characters: [],
            yourCharacter: {},
            includeLeaks: false
        }
    },
    mounted() {
        this.loadData();
    },
    methods: {
        loadData() {
            fetch("./data.json")
            .then((response) => response.json())
            .then((json) => {
                json.forEach(element => {
                    element.deleted = false;
                });
                this.characters = json
            });
        },
        clickCharacter(index) {
            alert(this.characters[index].deleted);
        },
        clickAsignCharacter(){
            let searching = true;
            let randomNumber = 0;
            while(searching){
                randomNumber = Math.round(Math.random() * (this.characters.length - 1));
                if(this.includeLeaks == this.characters[randomNumber].leak || this.characters[randomNumber].leak == false) searching = false;
            }
            this.yourCharacter = this.characters[randomNumber];
        }
    }
})

app.mount('#app')