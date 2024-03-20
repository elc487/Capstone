/**
 * @jest-environment jsdom
 */

import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
// We're using our own custom render function and not RTL's render.
import { renderWithProviders } from '../../utils/test-utils'
import "@testing-library/jest-dom";
import { Router } from 'react-router-dom';
import Navbar from './Navbar';


describe('Nav', () => {
    it('renders successfully', ()=> {
        expect(() => { 
                renderWithProviders(<Router>
                    <Navbar/>
                    </Router>)

        }).not.toThrow()
    })

    it.skip('links to landing page', ()=>{
        renderWithProviders(<Router>
            <Navbar/>
            </Router>)
        const landing = screen.getByText('Bearie & Rye')
        expect(landing).toHaveAttribute('href',)
    })
    it('links to products page', ()=>{
        renderWithProviders(<Router>
            <Navbar/>
            </Router>)
        const shop = screen.getByTestId('shop')
        expect(shop).toHaveAttribute('href')
    })
    it.skip('links to cart page', ()=>{})

    describe('User Not Logged In', ()=> {
        it.skip('links to login page', ()=>{})
        it.skip('links to register page', ()=>{})
    })

    describe('User logged in', () => {
        it.skip('links to logout page', ()=>{})
        it.skip('links to profile page', ()=>{})
    })











})