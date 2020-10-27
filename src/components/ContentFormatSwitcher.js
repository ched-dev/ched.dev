import { useState, useEffect } from 'react'
import classnames from 'classnames'
import localStorageUtil from 'src/utils/localStorage'

export default function ContentFormatSwitcher({ onChange = () => {} }) {
  const [contentFormat, setContentFormat] = useState('')

  useEffect(() => {
    setContentFormat(localStorageUtil.getContentFormat())
  })

  const savePreference = (value) => {
    localStorageUtil.setContentFormat(value)
    setContentFormat(value)
    onChange(value)
  }

  return (
    <nav className="content-format-switcher">
      <span className="section-infotitle">View as</span>
      <button className={classnames(`button`, { 'is-selected': contentFormat === 'minimal' })} onClick={() => savePreference('minimal')}><i className="fa fa-indent" aria-hidden="true" /> Minimal</button>
      <button className={classnames(`button`, { 'is-selected': contentFormat === 'detailed' })} onClick={() => savePreference('detailed')}><i className="fa fa-outdent" aria-hidden="true" /> Detailed</button>
    </nav>
  )
}