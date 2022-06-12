import React, { Component } from "react"
import icon from "./assets/icon.png"
import ui from "./assets/ui.png"
import macOs from "./assets/macos.png"
import win from "./assets/windows.png"
import ubuntu from "./assets/ubuntu.png"
import trackPrices from "./assets/track_prices.png"
import window_warning from "./assets/windows_warning.png"
import windows_accept from "./assets/windows_accept.png"
import mac_open_err from "./assets/macos_open_err.png"
import mac_open_sys_pref from "./assets/macos_open_sys_pref.png"
import mac_sys_pref from "./assets/macos_sys_pref.png"
import mac_sec from "./assets/macos_sec.png"
import sets from "./assets/sets.png"
import trackCollection from "./assets/track_collection.png"
import { BsGithub } from 'react-icons/bs'

class State {
  public page = "features"
}

export class App extends Component<{}, State>{

  constructor() {
    super({})
    this.state = new State()
  }

  private titleBar() {
    return (
      <div className="h-16 w-screen bg-blue-800 flex items-center">
        <div className="flex-grow"></div>
        <div className="h-16 w-16">
          <img src={icon}></img>
        </div>
        <div className="w-4"></div>
        <span className="text-white text-4xl title-font cursor-pointer" onClick={() => { this.setState({ ...this.state, page: "features" }) }}>Pokétrax</span>
        <div className="w-96"></div>
        <div className="text-white hover:text-red-600 cursor-pointer"
          onClick={() => { this.setState({ ...this.state, page: "features" }) }}>Features</div>
        <div className="w-4"></div>
        <div className="text-white hover:text-red-600 cursor-pointer"
          onClick={() => { this.setState({ ...this.state, page: "install" }) }}>Install Instructions</div>
        <div className="w-4"></div>
        <a href="https://github.com/poketrax/PokeTrax"><BsGithub className="w-6 h-6" /></a>
        <div className="flex-grow"></div>
      </div>
    )
  }

  private main() {
    return (
      <div className="w-screen flex">
        <div className="flex-grow"></div>
        <div>
          <div className="h-10"></div>
          <div className="flex text-3xl flex-col items-center">
            <div>A simple, free, fully featured, and open source</div>
            <div>Pokémon TCG collection manager for Windows, Mac, and Ubuntu</div>
          </div>
          <div className="h-10"></div>
          <div className="flex">
            <div className="flex-grow"></div>
            <a href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.dmg"><img className="h-20 object-contain cursor-pointer" src={macOs} /></a>
            <div className="w-6"></div>
            <a href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.nsi"><img className="h-20 object-contain cursor-pointer" src={win} /></a>
            <div className="w-6"></div>
            <a href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.snap"><img className="h-20 object-contain cursor-pointer" src={ubuntu} /></a>
            <div className="flex-grow"></div>
          </div>
          <div className="h-10"></div>
          <img className="h-96 object-contain" src={ui}></img>
        </div>
        <div className="flex-grow"></div>
      </div>
    )
  }

  private trackCards() {
    return (
      <div className="flex w-screen bg-gray-200 items-center">
        <div className="pt-16 pb-16">
          <img src={trackPrices} className="h-96 object-contain" />
        </div>
        <div className="w-8"></div>
        <div className="text-3xl">Track card prices over time</div>
        <div className="flex-grow"></div>
      </div>
    )
  }

  private trackCollection() {
    return (
      <div className="flex w-screen items-center">
        <div className="flex-grow"></div>
        <div className="text-3xl">Track cards and sealed products in your collection</div>
        <div className="w-8"></div>
        <div className="pt-16 pb-16">
          <img src={trackCollection} className="h-96 object-contain" />
        </div>
      </div>
    )
  }

  private sets() {
    return (
      <div className="flex w-screen bg-gray-200 items-center">
        <div className="pt-16 pb-16">
          <img src={sets} className="h-96 object-contain" />
        </div>
        <div className="w-8"></div>
        <div className="text-3xl">Browse sets for cards</div>
        <div className="flex-grow"></div>
      </div>
    )
  }

  private features() {
    return (
      <div>
        {this.main()}
        {this.trackCards()}
        {this.trackCollection()}
        {this.sets()}
      </div>
    )
  }

  private iBlank(number: string, text: string | React.ReactNode) {
    return (
      <div className="flex items-center">
        <div className="flex h-10 w-10 bg-slate-200 rounded-full items-center justify-center mr-10 ml-10 mt-5 mb-5">
          <div>{number}</div>
        </div>
        <div>{text}</div>
      </div>
    )
  }

  private iPicture(number: string, text: string | React.ReactNode, image: React.ReactNode) {
    return (
      <div>
        <div className="flex items-center">
          <div className="flex h-10 w-10 bg-slate-200 rounded-full items-center justify-center mr-10 ml-10 mt-5 mb-5">
            <div>{number}</div>
          </div>
          <div>{text}</div>
        </div>
        <div className="flex ml-32">
          {image}
        </div>
      </div>
    )
  }

  private windows() {
    return (
      <div>
        <div className="flex w-screen h-20 bg-gray-200 items-center">
          <img className="h-20 object-contain cursor-pointer" src={win} />
          <div className="pl-8 text-3xl">Windows install instructions</div>
        </div>
        <div className="w-screen">
          {this.iBlank("1", (<div>Download nsi from <a className="text-blue-600" href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.nsi">here</a></div>))}
          {this.iPicture("2", "You will get an error that looks like this. Click \'More Info\'", (<img src={window_warning}/>))}
          {this.iPicture("3", "Click 'Run anyway'", (<img src={windows_accept}/>))}
        </div>
      </div>
    )
  }

  private macos(){
    return (
      <div>
        <div className="flex w-screen h-20 bg-gray-200 items-center">
          <img className="h-20 object-contain cursor-pointer" src={macOs} />
          <div className="pl-8 text-3xl">Mac OS install instructions</div>
        </div>
        <div className="w-screen">
          {this.iBlank("1", (<div>Download dmg from <a className="text-blue-600" href="https://github.com/poketrax/PokeTrax/releases/latest/download/poketrax.dmg">here</a> and install PokeTrax</div>))}
          {this.iPicture("2", "Run PokeTrax you will get the following error. Click 'Cancel'", (<img src={mac_open_err}/>))}
          {this.iPicture("3", "Click the Apple logo at the top left of you screen, Then click 'System Preferences'", (<img src={mac_open_sys_pref}/>))}
          {this.iPicture("4", "On the system preferences window. Click 'Security & Privacy'", (<img src={mac_sys_pref}/>))}
          {this.iPicture("5", "On the General Tab in the 'Security & Privacy' window. Click 'Open Anyway'", (<img src={mac_sec}/>))}
        </div>
      </div>
    )
  }

  private install() {
    return (
      <div>
        {this.windows()}
        <div className="h-8"></div>
        {this.macos()}
      </div>
    )
  }

  render(): React.ReactNode {
    return (
      <div>
        {this.titleBar()}
        {this.state.page === "features" && this.features()}
        {this.state.page === "install" && this.install()}
      </div>
    )
  }
}