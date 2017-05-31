interface ConfigIds {
  pc: string,
  sp: string
}

interface CustomVar {
  customVar: [string]
}

interface ConfigFields {
  cookieDomain?: string,
  cookieExpires?: number,
  customVar?: CustomVar,
  overrideUrl?: string,
}

declare namespace _ud {
  type Command = 'create'
  type Send = 'send'
  type Set = 'set'
  type ClientEnvironmentsData = {
    v: number,
    uid?: number,
    l: string,
    n: string,
    r: string,
    sw: number,
    sh: number,
    ww: number,
    wh: number,
    h: number,
    w: number
  }
  type CustomData = {
    cd1?: string,
    cd2?: string,
    cd3?: string,
    cd4?: string,
    cd5?: string,
    cd6?: string,
    cd7?: string,
    cd8?: string,
    cd9?: string,
    cd10?: string,
    cd11?: string,
    cd12?: string,
    cd13?: string,
    cd14?: string,
    cd15?: string,
    cd16?: string,
    cd17?: string,
    cd18?: string,
    cd19?: string,
    cd20?: string,
    cm1?: number,
    cm2?: number,
    cm3?: number,
    cm4?: number,
    cm5?: number,
    cm6?: number,
    cm7?: number,
    cm8?: number,
    cm9?: number,
    cm10?: number,
    cm11?: number,
    cm12?: number,
    cm13?: number,
    cm14?: number,
    cm15?: number,
    cm16?: number,
    cm17?: number,
    cm18?: number,
    cm19?: number,
    cm20?: number
  }
  type State = {
    env: ClientEnvironmentsData,
    custom: CustomData
  }
  type SetCustomVar = 'setCustomVar'
  type ChangeVirtualUrl = 'changeVirtualUrl'
  interface USERDIVEObject {
    (command: Command, trackingId: string | ConfigIds, config?: ConfigFields): void
    (command: Send, sendType: string, pageUrl: string): void
    (command: Set, key: any, value?: string | number): State
    (command: SetCustomVar, customVar: CustomVar): void
    (command: ChangeVirtualUrl, url: string): void
  }
}
