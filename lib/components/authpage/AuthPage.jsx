import React, { Component } from 'react'
import './AuthPage.css'
import { BsEnvelopeAt, BsLock, BsTelephone, BsGlobe,BsArrowLeft } from 'react-icons/bs'
import bgImage from "./REGISTRATION_LANDSCAPE_2.png"
import googleLogo from "./google.png"

class AuthPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      phone: '',
      password: '',
      emailValid: true,
      phoneValid: true,
      passwordValid: true,
      validateMsg: '',
      isEmail: true,
      myProps: props
    }
  }

  validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let valid = emailRegex.test(email)
    this.setState({
      emailValid: valid
    })
    !valid
      ? this.setState({
          validateMsg: 'Please make sure you input a valid email address'
        })
      : true
  }

  emailVTrue = () => {
    this.setState({ emailValid: true })
    this.setState({ validateMsg: '' })
  }

  validatePassword = (password) => {
    let valid = password.length >= 8
    this.setState({ passwordValid: valid })
    !valid
      ? this.setState({
          validateMsg:
            'Please make sure that your password is 8 characters or more'
        })
      : true
  }

  passwordVTrue = () => {
    this.setState({ passwordValid: true })
    this.setState({ validateMsg: '' })
  }

  validatePhone = (phone) => {
    let valid = phone.length > 15
    this.setState({ phoneValid: valid })
    !valid
      ? this.setState({
          validateMsg:
            'Please Input a valid Phone Number, All Phone numbers must not exceed 15 digits'
        })
      : true
  }

  phoneVTrue = () => {
    this.setState({ phoneValid: true })
    this.setState({ validateMsg: '' })
  }

  onInputChange = (newState) => {
    this.setState(newState)
  }

  updateAuthState = (payload) => {
    this.setState({
      authOpen: payload
    })
  }

  updateOption = (payload)=>{
    this.setState({
        isEmail: payload
    })
  }
  submitManual = async () => {
    console.log("my props", this.state.myProps)
    this.validatePassword(this.state.password)
    this.state.isEmail ? this.validateEmail(this.state.email) : this.validatePhone(this.state.phone)
    let valid = (this.state.isEmail ? this.state.emailValid : this.state.phoneValid) && this.state.passwordValid
    if (!valid) {
      return
    }
    let data = {
      emailSignin : this.state.isEmail,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password
    }
    this.props.sendLogin(data,this.state.myProps.baseURL, this.state.myProps.loginEndpoint).then(res=>{
      console.log('res', res)
    }).catch(err=>{
      console.error('error', err.message)
    })
  }

  render() {
    let vaildationMessage = <div>{this.state.validateMsg}</div>
    let phoneInput = (
        <div className={'inputContainer'}>
            <BsTelephone style={{ width: 40, height: 25 }} />{' '}
            <input
            type='number'
            onFocus={() => {
                this.phoneVTrue()
            }}
            onBlur={(e) => {
                this.validatePhone(e.target.value)
            }}
            onChange={(e) => {
                this.onInputChange({ phone: e.target.value })
            }}
            value={this.state.phone}
            placeholder='Input Your Phone Number'
            />
        </div>
    )

    let emailInput = (
        <div className={'inputContainer'}>
        <BsEnvelopeAt style={{ width: 40, height: 25 }} />{' '}
        <input
          type='text'
          onFocus={() => {
            this.emailVTrue()
          }}
          onBlur={(e) => {
            this.validateEmail(e.target.value)
          }}
          onChange={(e) => {
            this.onInputChange({ email: e.target.value })
          }}
          value={this.state.email}
          placeholder='Input a vaild Email Address'
        />
      </div>
    )
    let authContainerStyle = {
      backgroundImage: `url(${bgImage})`
    }


    let auth_main = (
      <div className={'AuthContainer'} style={authContainerStyle}>
        <div>
          <div className={'closeButtonContainer'}>
            <button
              className={'closeButton'}
            >
              <BsArrowLeft></BsArrowLeft>
            </button>
            <span>English</span>
            <span>
              <BsGlobe />
            </span>
          </div>
          <div className={'AuthContents'}>
            <div className={'offset15'}>
              <h1>Sign In To Shyn Tech</h1>
              <p className={'offset15'}>
                You are just a step away from something amazing, Sign in with
                either your Phone number or your email address
              </p>
              <p className={'signUpOptions'}><span className={this.state.isEmail ? 'currentOption': ""} onClick={()=>{this.updateOption(true)}}>Email</span> <span className={!this.state.isEmail ? 'currentOption': ""} onClick={()=>{this.updateOption(false)}}>Phone</span></p>
            </div>
            <div className={'vMessage'}>{vaildationMessage}</div>

            {this.state.isEmail ? emailInput : phoneInput}
            <div className={'inputContainer'}>
              <BsLock style={{ width: 40, height: 25 }} />{' '}
              <input
                type='password'
                onFocus={() => {
                  this.passwordVTrue()
                }}
                onBlur={(e) => {
                  this.validatePassword(e.target.value)
                }}
                onChange={(e) => {
                  this.onInputChange({ password: e.target.value })
                }}
                value={this.state.password}
                placeholder='Input Your Password'
              />
            </div>
          </div>
          <div className={'AuthButtons'}>
            <div>
              <button
                onClick={() => {
                  this.submitManual()
                }}
              >
                Sign In
              </button>
            </div>
            <div>
              <p className={'offset15_google'}>Or Sign in with Google</p>
            </div>
            <div>
              <button
                onClick={() => {
                  this.submitGoogle()
                }}
              > <span><img className={'googleIcon'} src={googleLogo} /></span><span style={{display: 'inline-block',paddingLeft: 10,position: 'relative',bottom: 8}}>Continue With Google</span></button>
            </div>
          </div>
        </div>
      </div>
    )
    return (
      <div>
        <div> { auth_main }</div>
      </div>
    )
  }
}

export {AuthPage}
