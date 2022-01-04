
import Api from "C:/Users/Jostein Gjessing Bay/abaxoppgave/brewdogbeerchallenge/src/components/Api.vue";
import { expect } from "chai";
import { mount } from '@vue/test-utils'

describe('Api.vue', async () => {
    const api = await mount(Api,{});
    const data = await api.fetchData();
    it ('receives correct API info', () => {
        expect(data.exists()).to.be.true
    })
});