import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Overview from 'js/_components/organisms/_overview';
import PriceCard from 'js/_components/molecules/_pricecard';
import FeedCard from "js/_components/molecules/_feedcard";
import TransactionCard from "js/_components/molecules/_transactioncard";
import Chart from "js/_components/molecules/_chart";
import TopCard from "js/_components/molecules/_topcard";
import AddTransaction from "js/_components/organisms/_addtransaction";

afterEach(cleanup)

describe("Overview Component", () => {
    it("it should contain four pricecard child components", () => {
        const wrapper = shallow(<Overview />);
        expect(wrapper.find(PriceCard)).toHaveLength(4);
    });

    it("it should contain FeedCard child component", () => {
        const wrapper = shallow(<Overview />);
        expect(wrapper.find(FeedCard)).toHaveLength(1);
    });

    it("it should contain TransactionCard child component", () => {
        const wrapper = shallow(<Overview />);
        expect(wrapper.find(TransactionCard)).toHaveLength(1);
    });
    it("it should contain Chart child component", () => {
        const wrapper = shallow(<Overview />);
        expect(wrapper.find(Chart)).toHaveLength(1);
    });
    it("it should contain TopCard child component", () => {
        const wrapper = shallow(<Overview />);
        expect(wrapper.find(TopCard)).toHaveLength(0);
    });
    it("it should contain AddTransaction child component", () => {
        const wrapper = shallow(<Overview />);
        expect(wrapper.find(AddTransaction)).toHaveLength(1);
    });

});