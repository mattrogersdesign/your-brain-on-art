<xml xmlns="https://developers.google.com/blockly/xml">
    <variables>
        <variable id="VYgi?u5[{CA86!yp^P,d">progress-bar-var</variable>
        <variable id="WpqxAGl{cT)@wa+E.MXU">q1</variable>
        <variable id="$K{~cT!lRa+*BH3tMa~Y">totalscore</variable>
        <variable id="nFYZ,|zudP{A?Ec8;5zd">cumulative</variable>
        <variable id="zy8le#Y?XzH!LIm9iB$4">q2</variable>
        <variable id="Q}/jglu0buj6cy22vM/M">appreciation_tot</variable>
        <variable id="db`kYES!:BCLs;qIgcKA">q3</variable>
        <variable id="zR9hzn6JvIft:*7DVWO,">experience_tot</variable>
        <variable id="^A8HV0_TQxP?T0:PGuwS">appreciation</variable>
        <variable id="PU.Jq(JL@7pyU-OXMBVm">q4</variable>
        <variable id="fbc:Jief^,v_d?nLFE7=">behavior_tot</variable>
        <variable id="HEiQI#ChFM?EwoZVB+B8">q5</variable>
        <variable id="$h2F4k:(|-H]p2u_Wfq=">experience</variable>
        <variable id="F+4R[X+Np@kFMi`tfr3%">q6</variable>
        <variable id="+MgL%7YWwkv}2b46#t%i">q7</variable>
        <variable id="gmW_ug!Nr7m,@]F08kv=">behavior</variable>
        <variable id="TR,Sv}pAnOqnBu+2xfw^">q8</variable>
        <variable id="?Osp^Nb7DkM6+}jp=5v-">q9</variable>
        <variable id="+eyxEM8)NQLUes{laB.[">q10</variable>
        <variable id="ZPvEb,PhUvl6j!-;G6bX">q11</variable>
        <variable id="W0ft2Bk!mb+crt?wcm.9">q12</variable>
        <variable id="KH2mSWlu(,TQ`csvj0cH">q13</variable>
        <variable id="Oa_jsE:WSW:Z`[t13T7z">q14</variable>
        <variable id="zk[2!in?[.]!bTP,dssI">results_tab</variable>
    </variables>
    <block type="tab_buttons" id="+l2|Ba%^yN.~=fxq?)K7" x="1185" y="-357">
        <value name="next">
            <block type="element" id="XBQt4VS)IC$LF(UC.6Mh">
                <field name="element">bloc</field>
                <field name="NAME">next-question</field>
            </block>
        </value>
        <value name="prev">
            <block type="element" id="FmysrBTYj2EY_/EMm?V%">
                <field name="element">bloc</field>
                <field name="NAME">prev-question</field>
            </block>
        </value>
        <value name="class">
            <block type="text" id="S6;k6)3FUow|*0*tX,b@">
                <field name="TEXT">Active</field>
            </block>
        </value>
        <value name="start">
            <block type="variables_get" id=",nk[wNE5Jmmzf(9VCzM.">
                <field name="VAR" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
            </block>
        </value>
        <next>
            <block type="on_input_change_block" id="`/)hMA;/yecFrzsJ;zC@">
                <field name="input_name" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
                <statement name="NAME">
                    <block type="set_button_to_open_tab" id="j:Z=H-]^@UB13h#=^H]J">
                        <value name="tab">
                            <block type="variables_get" id="hzwz)(]zs-ttn5*pyI(?">
                                <field name="VAR" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                            </block>
                        </value>
                        <next>
                            <block type="procedures_callnoreturn" id="h:v8e=*CaPvx?+,[uJUz">
                                <mutation name="Calculate overall score"></mutation>
                                <next>
                                    <block type="procedures_callnoreturn" id="*yUBU,$lGH=Rx_Wh7|f[">
                                        <mutation name="calculate cumulative score"></mutation>
                                        <next>
                                            <block type="mouse_event" id="A[rfpp;R~oC3Y)[pNj$j">
                                                <field name="on">click</field>
                                                <value name="into">
                                                    <block type="element" id="5}Ss]~K(?3.lEz)`-M7;">
                                                        <field name="element">bloc</field>
                                                        <field name="NAME">next-question</field>
                                                    </block>
                                                </value>
                                                <statement name="NAME">
                                                    <block type="set_css" id="q24wfgyI$,8hV7g1N;|^">
                                                        <statement name="css">
                                                            <block type="css_property_set" id="8QsJp$Q4zjo_0Xe8LQ8X">
                                                                <field name="unit">%</field>
                                                                <value name="property">
                                                                    <shadow type="text" id="Cq9^I=|WJ/.%6M={w@%V">
                                                                        <field name="TEXT">width</field>
                                                                    </shadow>
                                                                </value>
                                                                <value name="value">
                                                                    <shadow type="text" id="2N+@;D/ZTk)ZeMaF,:z|">
                                                                        <field name="TEXT">7</field>
                                                                    </shadow>
                                                                </value>
                                                            </block>
                                                        </statement>
                                                        <value name="to">
                                                            <block type="element" id="q#66dAL{l/ASA3:q!LUG">
                                                                <field name="element">.</field>
                                                                <field name="NAME">progress-bar</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </statement>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </statement>
                <next>
                    <block type="on_input_change_block" id="#up$!sc(j4icFU]s9U:}">
                        <field name="input_name" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                        <statement name="NAME">
                            <block type="set_button_to_open_tab" id="y,7^ddl115S?-|kHQO8~">
                                <value name="tab">
                                    <block type="variables_get" id="t;`f6fZ0)1:!bWNrk77R">
                                        <field name="VAR" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                    </block>
                                </value>
                                <next>
                                    <block type="procedures_callnoreturn" id="DBWAAzks*)RXk?ZJdCGP">
                                        <mutation name="Calculate overall score"></mutation>
                                        <next>
                                            <block type="procedures_callnoreturn" id="F5_S^V3oKKVB+#u/hby`">
                                                <mutation name="calculate cumulative score"></mutation>
                                                <next>
                                                    <block type="mouse_event" id="=gYL5Z?pSP`z^SyHdyAp">
                                                        <field name="on">click</field>
                                                        <value name="into">
                                                            <block type="element" id="=;s=kf9kko}|G,A%V8!$">
                                                                <field name="element">bloc</field>
                                                                <field name="NAME">next-question</field>
                                                            </block>
                                                        </value>
                                                        <statement name="NAME">
                                                            <block type="set_css" id="|KaJCW0xeK||AE6;AOZI">
                                                                <statement name="css">
                                                                    <block type="css_property_set" id="+m|OCjs[Z5$9V[l3~f{Q">
                                                                        <field name="unit">%</field>
                                                                        <value name="property">
                                                                            <shadow type="text" id="pJzV[sxK@Pp8E[T?sDyM">
                                                                                <field name="TEXT">width</field>
                                                                            </shadow>
                                                                        </value>
                                                                        <value name="value">
                                                                            <shadow type="text" id="5[/~zR_JaAie?$/=k)7g">
                                                                                <field name="TEXT">14</field>
                                                                            </shadow>
                                                                        </value>
                                                                    </block>
                                                                </statement>
                                                                <value name="to">
                                                                    <block type="element" id="+YBCC}jeyuA!n(^r:fB|">
                                                                        <field name="element">.</field>
                                                                        <field name="NAME">progress-bar</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </statement>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </statement>
                        <next>
                            <block type="on_input_change_block" id="`/z#c8p4_(i!Z(x!W8(3">
                                <field name="input_name" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                <statement name="NAME">
                                    <block type="set_button_to_open_tab" id="he7I}v/fsDWAU4l,Q=D5">
                                        <value name="tab">
                                            <block type="variables_get" id="m~g9s?V^7-DnlINA-_4,">
                                                <field name="VAR" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="procedures_callnoreturn" id="cMA,4R5+3p8$^($H6xHp">
                                                <mutation name="Calculate overall score"></mutation>
                                                <next>
                                                    <block type="procedures_callnoreturn" id="NhyP;3/a%s+F`2u`_77T">
                                                        <mutation name="calculate cumulative score"></mutation>
                                                        <next>
                                                            <block type="mouse_event" id="vvF0%DugYeA.UAJQn?v|">
                                                                <field name="on">click</field>
                                                                <value name="into">
                                                                    <block type="element" id="z$;kgHB)OipgsiIttc/N">
                                                                        <field name="element">bloc</field>
                                                                        <field name="NAME">next-question</field>
                                                                    </block>
                                                                </value>
                                                                <statement name="NAME">
                                                                    <block type="set_css" id="FvJL6[T2aNREPxkuo6A9">
                                                                        <statement name="css">
                                                                            <block type="css_property_set" id=":AZC#JJ2EOd:N.r)}a#1">
                                                                                <field name="unit">%</field>
                                                                                <value name="property">
                                                                                    <shadow type="text" id="bFRkl|[?V),d?FtjBIjq">
                                                                                        <field name="TEXT">width</field>
                                                                                    </shadow>
                                                                                </value>
                                                                                <value name="value">
                                                                                    <shadow type="text" id="sTj+F)=6F:$X+@5];K=,">
                                                                                        <field name="TEXT">21</field>
                                                                                    </shadow>
                                                                                </value>
                                                                            </block>
                                                                        </statement>
                                                                        <value name="to">
                                                                            <block type="element" id="+ce~8~sWx13ITL^A5$)j">
                                                                                <field name="element">.</field>
                                                                                <field name="NAME">progress-bar</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </statement>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </statement>
                                <next>
                                    <block type="on_input_change_block" id="W=^Ro@_iv+2zBg:GID_(">
                                        <field name="input_name" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                        <statement name="NAME">
                                            <block type="set_button_to_open_tab" id="J:;cNcv[OkE`^BgHM/2~">
                                                <value name="tab">
                                                    <block type="variables_get" id="{K_oLb+Z;Qc4t}o=]^,$">
                                                        <field name="VAR" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="procedures_callnoreturn" id="UsrEdFXBq7EvFQ6`I2C}">
                                                        <mutation name="Calculate overall score"></mutation>
                                                        <next>
                                                            <block type="procedures_callnoreturn" id=":-!^cAw]YK@V(Gw:upo)">
                                                                <mutation name="calculate cumulative score"></mutation>
                                                                <next>
                                                                    <block type="mouse_event" id="|xXADV6msOcrE)MYx:d9">
                                                                        <field name="on">click</field>
                                                                        <value name="into">
                                                                            <block type="element" id="e4f^4uq)tv@L13Na;U+Y">
                                                                                <field name="element">bloc</field>
                                                                                <field name="NAME">next-question</field>
                                                                            </block>
                                                                        </value>
                                                                        <statement name="NAME">
                                                                            <block type="set_css" id="@%$gB[~F1_G?Eu%edI]~">
                                                                                <statement name="css">
                                                                                    <block type="css_property_set" id="dGD7hI,tB/69oQtr6isC">
                                                                                        <field name="unit">%</field>
                                                                                        <value name="property">
                                                                                            <shadow type="text" id="AvT*z]eO4kAjM)Q+@Osh">
                                                                                                <field name="TEXT">width</field>
                                                                                            </shadow>
                                                                                        </value>
                                                                                        <value name="value">
                                                                                            <shadow type="text" id="*2x_Wq9yt)LQ0qdvIBjd">
                                                                                                <field name="TEXT">28</field>
                                                                                            </shadow>
                                                                                        </value>
                                                                                    </block>
                                                                                </statement>
                                                                                <value name="to">
                                                                                    <block type="element" id="X@J[NA6F5CPHscPwB`5j">
                                                                                        <field name="element">.</field>
                                                                                        <field name="NAME">progress-bar</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </statement>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </statement>
                                        <next>
                                            <block type="on_input_change_block" id="AU#?kW^OW/J]]v!tV3%=">
                                                <field name="input_name" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                <statement name="NAME">
                                                    <block type="set_button_to_open_tab" id="{rwAbzq2$t~L@r7Oo,U}">
                                                        <value name="tab">
                                                            <block type="variables_get" id="H{,c-%bX28D]YBv!E[Xb">
                                                                <field name="VAR" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="procedures_callnoreturn" id="[xhiH5!.-*J_(s6ceEn$">
                                                                <mutation name="Calculate overall score"></mutation>
                                                                <next>
                                                                    <block type="procedures_callnoreturn" id="GfR/pbMerc/LL@70Noe,">
                                                                        <mutation name="calculate cumulative score"></mutation>
                                                                        <next>
                                                                            <block type="mouse_event" id="Zdl=pE(t}_sRk@.PgT/f">
                                                                                <field name="on">click</field>
                                                                                <value name="into">
                                                                                    <block type="element" id="RU@+FM~[;:@jci6teoKQ">
                                                                                        <field name="element">bloc</field>
                                                                                        <field name="NAME">next-question</field>
                                                                                    </block>
                                                                                </value>
                                                                                <statement name="NAME">
                                                                                    <block type="set_css" id="0LA*onhyYQ^Gy!+@BRGb">
                                                                                        <statement name="css">
                                                                                            <block type="css_property_set" id="GQhFc]RIOGX)SMKjpoH%">
                                                                                                <field name="unit">%</field>
                                                                                                <value name="property">
                                                                                                    <shadow type="text" id="wa=v]u4aDGzek3hJkzbI">
                                                                                                        <field name="TEXT">width</field>
                                                                                                    </shadow>
                                                                                                </value>
                                                                                                <value name="value">
                                                                                                    <shadow type="text" id="bsjOBBPw%Zg@V0vD%c4v">
                                                                                                        <field name="TEXT">35</field>
                                                                                                    </shadow>
                                                                                                </value>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <value name="to">
                                                                                            <block type="element" id="gv??G)QmB;/g[knb)cM]">
                                                                                                <field name="element">.</field>
                                                                                                <field name="NAME">progress-bar</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </statement>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                                <next>
                                                    <block type="on_input_change_block" id="?R/QOM9V=@hi;?cz?sxD">
                                                        <field name="input_name" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                        <statement name="NAME">
                                                            <block type="set_button_to_open_tab" id="nF;1|EiG?^CKVBkxD87%">
                                                                <value name="tab">
                                                                    <block type="variables_get" id="Rz1|yKt43w,S*#wFTiIN">
                                                                        <field name="VAR" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="procedures_callnoreturn" id=";%u{Z.f(0]O2dJu3[@mw">
                                                                        <mutation name="Calculate overall score"></mutation>
                                                                        <next>
                                                                            <block type="procedures_callnoreturn" id="y_2)~klq.D|AZH/1}lOt">
                                                                                <mutation name="calculate cumulative score"></mutation>
                                                                                <next>
                                                                                    <block type="mouse_event" id="Ni.:09f%2=O@G[z.gm|+">
                                                                                        <field name="on">click</field>
                                                                                        <value name="into">
                                                                                            <block type="element" id="A4H[hP=yKuDP%T]Htk1R">
                                                                                                <field name="element">bloc</field>
                                                                                                <field name="NAME">next-question</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <statement name="NAME">
                                                                                            <block type="set_css" id="~@K.]UKeejXzZ[*A#p_T">
                                                                                                <statement name="css">
                                                                                                    <block type="css_property_set" id="u0m%JiQnG,@NN^t~Aj]R">
                                                                                                        <field name="unit">%</field>
                                                                                                        <value name="property">
                                                                                                            <shadow type="text" id="c`V8`JS:e+GYXMVF!|c%">
                                                                                                                <field name="TEXT">width</field>
                                                                                                            </shadow>
                                                                                                        </value>
                                                                                                        <value name="value">
                                                                                                            <shadow type="text" id="}ba,/AILV=?TCtxWI5{4">
                                                                                                                <field name="TEXT">42</field>
                                                                                                            </shadow>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <value name="to">
                                                                                                    <block type="element" id="/L:SJ+_AauGwR@}lX)/j">
                                                                                                        <field name="element">.</field>
                                                                                                        <field name="NAME">progress-bar</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </statement>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </statement>
                                                        <next>
                                                            <block type="on_input_change_block" id="LFC^M}._uh3v+p.7*/*~">
                                                                <field name="input_name" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                <statement name="NAME">
                                                                    <block type="set_button_to_open_tab" id="Tnp[4{c73gLttt:wq@%,">
                                                                        <value name="tab">
                                                                            <block type="variables_get" id="tZ#SR+^iL#d[EFzVfAC+">
                                                                                <field name="VAR" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="procedures_callnoreturn" id="W}2{cNt@?)R,t7X^qAu5">
                                                                                <mutation name="Calculate overall score"></mutation>
                                                                                <next>
                                                                                    <block type="procedures_callnoreturn" id="y#im_=[Gl4n3y`7z~)/~">
                                                                                        <mutation name="calculate cumulative score"></mutation>
                                                                                        <next>
                                                                                            <block type="mouse_event" id="x0)rvU,k;6f_K9a$ojG5">
                                                                                                <field name="on">click</field>
                                                                                                <value name="into">
                                                                                                    <block type="element" id="(sG8p~$o{(M^F/OfH/3t">
                                                                                                        <field name="element">bloc</field>
                                                                                                        <field name="NAME">next-question</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <statement name="NAME">
                                                                                                    <block type="set_css" id="k/Tz=Pkb$=~^3!`.Y6|D">
                                                                                                        <statement name="css">
                                                                                                            <block type="css_property_set" id="la*#c0%*Gk(/oUGfn%53">
                                                                                                                <field name="unit">%</field>
                                                                                                                <value name="property">
                                                                                                                    <shadow type="text" id="x~7slXl+,i^d0-X7|hBN">
                                                                                                                        <field name="TEXT">width</field>
                                                                                                                    </shadow>
                                                                                                                </value>
                                                                                                                <value name="value">
                                                                                                                    <shadow type="text" id="Fe^SIYU%JfGA9+CtCC.U">
                                                                                                                        <field name="TEXT">49</field>
                                                                                                                    </shadow>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <value name="to">
                                                                                                            <block type="element" id="0I{o.IF30?Uidjy}kqJf">
                                                                                                                <field name="element">.</field>
                                                                                                                <field name="NAME">progress-bar</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </statement>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </statement>
                                                                <next>
                                                                    <block type="on_input_change_block" id="^3i?(d0RfDh!^r/Osvzr">
                                                                        <field name="input_name" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                        <statement name="NAME">
                                                                            <block type="set_button_to_open_tab" id=",Qnr?_Nx*{ozGlV`,Q:;">
                                                                                <value name="tab">
                                                                                    <block type="variables_get" id="n`g,BhIkq(|8)apg,a@g">
                                                                                        <field name="VAR" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="procedures_callnoreturn" id="DH%dlRqVmTOdsBqhoqTi">
                                                                                        <mutation name="Calculate overall score"></mutation>
                                                                                        <next>
                                                                                            <block type="procedures_callnoreturn" id="0|(r5ZK]ssZH-i-6-ubY">
                                                                                                <mutation name="calculate cumulative score"></mutation>
                                                                                                <next>
                                                                                                    <block type="mouse_event" id="5Af||7#IiOy@34wSSy,I">
                                                                                                        <field name="on">click</field>
                                                                                                        <value name="into">
                                                                                                            <block type="element" id="38lg4`u{dIG:x/KAWQ|p">
                                                                                                                <field name="element">bloc</field>
                                                                                                                <field name="NAME">next-question</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <statement name="NAME">
                                                                                                            <block type="set_css" id="-]FXKa}qIYm([jL0Bh]a">
                                                                                                                <statement name="css">
                                                                                                                    <block type="css_property_set" id="_1g/;BJb_}nu}xK1{d%U">
                                                                                                                        <field name="unit">%</field>
                                                                                                                        <value name="property">
                                                                                                                            <shadow type="text" id="F1XU57h#oUXM=n%E+|C(">
                                                                                                                                <field name="TEXT">width</field>
                                                                                                                            </shadow>
                                                                                                                        </value>
                                                                                                                        <value name="value">
                                                                                                                            <shadow type="text" id="57;G4uxH%K4|Tc3F.q5^">
                                                                                                                                <field name="TEXT">56</field>
                                                                                                                            </shadow>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <value name="to">
                                                                                                                    <block type="element" id="W^yrJw@$nxeL3Ei}WN6C">
                                                                                                                        <field name="element">.</field>
                                                                                                                        <field name="NAME">progress-bar</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </statement>
                                                                        <next>
                                                                            <block type="on_input_change_block" id="N7n]oIO1uksR/$g^!OiG">
                                                                                <field name="input_name" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                <statement name="NAME">
                                                                                    <block type="set_button_to_open_tab" id="D;lc}ygM)mF:%)@9XVMN">
                                                                                        <value name="tab">
                                                                                            <block type="variables_get" id=":e%8u10*DG$J~$y$#F?2">
                                                                                                <field name="VAR" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="procedures_callnoreturn" id="A?NbS~e+pVG!Q~IKm8x0">
                                                                                                <mutation name="Calculate overall score"></mutation>
                                                                                                <next>
                                                                                                    <block type="procedures_callnoreturn" id="IYS:(05d(G2/?:s@z5j;">
                                                                                                        <mutation name="calculate cumulative score"></mutation>
                                                                                                        <next>
                                                                                                            <block type="mouse_event" id="Cy?@LF9kyUUB;_NGXf}I">
                                                                                                                <field name="on">click</field>
                                                                                                                <value name="into">
                                                                                                                    <block type="element" id="IjZAa=h,:l8@8(r;ZUE7">
                                                                                                                        <field name="element">bloc</field>
                                                                                                                        <field name="NAME">next-question</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <statement name="NAME">
                                                                                                                    <block type="set_css" id="tKUMz}q.XC@q6]Va.ha|">
                                                                                                                        <statement name="css">
                                                                                                                            <block type="css_property_set" id="NWP#Xjw-Q~cknNigE@H%">
                                                                                                                                <field name="unit">%</field>
                                                                                                                                <value name="property">
                                                                                                                                    <shadow type="text" id="}Il@oak,s)pCP;FYg|f=">
                                                                                                                                        <field name="TEXT">width</field>
                                                                                                                                    </shadow>
                                                                                                                                </value>
                                                                                                                                <value name="value">
                                                                                                                                    <shadow type="text" id="G~l|m(COT!(ra|%KBa([">
                                                                                                                                        <field name="TEXT">63</field>
                                                                                                                                    </shadow>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                        <value name="to">
                                                                                                                            <block type="element" id="iIT|B[.M]|KVTIl.cKV-">
                                                                                                                                <field name="element">.</field>
                                                                                                                                <field name="NAME">progress-bar</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </statement>
                                                                                <next>
                                                                                    <block type="on_input_change_block" id="dFdj2:nG^5l3^)LK,1`g">
                                                                                        <field name="input_name" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                        <statement name="NAME">
                                                                                            <block type="set_button_to_open_tab" id="etFR@6Nm*o._|dKmbFZ!">
                                                                                                <value name="tab">
                                                                                                    <block type="variables_get" id="3:[J5NFy%uwua/{v#eBd">
                                                                                                        <field name="VAR" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="procedures_callnoreturn" id="DsTK9jpd;DWYin(;N3y6">
                                                                                                        <mutation name="Calculate overall score"></mutation>
                                                                                                        <next>
                                                                                                            <block type="procedures_callnoreturn" id=")sr1PIadRDe34(t5iVW4">
                                                                                                                <mutation name="calculate cumulative score"></mutation>
                                                                                                                <next>
                                                                                                                    <block type="mouse_event" id="CfMbiq:!Q*AoXD3VE)$W">
                                                                                                                        <field name="on">click</field>
                                                                                                                        <value name="into">
                                                                                                                            <block type="element" id="xeNz6TtB|WngdWu~(;g#">
                                                                                                                                <field name="element">bloc</field>
                                                                                                                                <field name="NAME">next-question</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <statement name="NAME">
                                                                                                                            <block type="set_css" id="19inONo^zlhN_2uy8!}B">
                                                                                                                                <statement name="css">
                                                                                                                                    <block type="css_property_set" id="S@y!svDYE+xP(~UpE~Iz">
                                                                                                                                        <field name="unit">%</field>
                                                                                                                                        <value name="property">
                                                                                                                                            <shadow type="text" id="mw+}0F7}zwf),+L7~|CR">
                                                                                                                                                <field name="TEXT">width</field>
                                                                                                                                            </shadow>
                                                                                                                                        </value>
                                                                                                                                        <value name="value">
                                                                                                                                            <shadow type="text" id="ru{.46OSIQ}w9q7oHGTc">
                                                                                                                                                <field name="TEXT">70</field>
                                                                                                                                            </shadow>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                                <value name="to">
                                                                                                                                    <block type="element" id="LY{E#UKG@=r2E[5UIz}f">
                                                                                                                                        <field name="element">.</field>
                                                                                                                                        <field name="NAME">progress-bar</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <next>
                                                                                            <block type="on_input_change_block" id="me2=bIT8Jw},*5~*I=Lp">
                                                                                                <field name="input_name" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                <statement name="NAME">
                                                                                                    <block type="set_button_to_open_tab" id="!:9#thFFZ,#YEeROS1u6">
                                                                                                        <value name="tab">
                                                                                                            <block type="variables_get" id="$fSU=u5s{25Z2?[g9QQa">
                                                                                                                <field name="VAR" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <next>
                                                                                                            <block type="procedures_callnoreturn" id="FJ+z=Na9e7z#J^N#DlpV">
                                                                                                                <mutation name="Calculate overall score"></mutation>
                                                                                                                <next>
                                                                                                                    <block type="procedures_callnoreturn" id="/=jlp-jF~#}*vz~D2oY@">
                                                                                                                        <mutation name="calculate cumulative score"></mutation>
                                                                                                                        <next>
                                                                                                                            <block type="mouse_event" id="Lm!?ldtiLX*t:LCB:-%N">
                                                                                                                                <field name="on">click</field>
                                                                                                                                <value name="into">
                                                                                                                                    <block type="element" id="8,FHq83F@l]:JKW`Xns(">
                                                                                                                                        <field name="element">bloc</field>
                                                                                                                                        <field name="NAME">next-question</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <statement name="NAME">
                                                                                                                                    <block type="set_css" id="tfQ]}saHn2dROng=gf)p">
                                                                                                                                        <statement name="css">
                                                                                                                                            <block type="css_property_set" id="q#]zo:NH)]0s;VzaMpS+">
                                                                                                                                                <field name="unit">%</field>
                                                                                                                                                <value name="property">
                                                                                                                                                    <shadow type="text" id="RjSC$*-S1euMC07Z9F23">
                                                                                                                                                        <field name="TEXT">width</field>
                                                                                                                                                    </shadow>
                                                                                                                                                </value>
                                                                                                                                                <value name="value">
                                                                                                                                                    <shadow type="text" id="wmWtrw=*a!}lmsL*n*a)">
                                                                                                                                                        <field name="TEXT">77</field>
                                                                                                                                                    </shadow>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                        <value name="to">
                                                                                                                                            <block type="element" id="s+lzMy^QC^}[h^+^A1~|">
                                                                                                                                                <field name="element">.</field>
                                                                                                                                                <field name="NAME">progress-bar</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <next>
                                                                                                    <block type="on_input_change_block" id="u~;l0dy,AQoK@Df!b)yb">
                                                                                                        <field name="input_name" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                        <statement name="NAME">
                                                                                                            <block type="set_button_to_open_tab" id="xcT^[nq?K1Ni*MEt/YRu">
                                                                                                                <value name="tab">
                                                                                                                    <block type="variables_get" id="Q.TC%X@!_X#]P58KddxO">
                                                                                                                        <field name="VAR" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <next>
                                                                                                                    <block type="procedures_callnoreturn" id="|U(N2_lhEz}j]]C5A[v,">
                                                                                                                        <mutation name="Calculate overall score"></mutation>
                                                                                                                        <next>
                                                                                                                            <block type="procedures_callnoreturn" id="B6f@c=ySc5.ZWAU2S%5i">
                                                                                                                                <mutation name="calculate cumulative score"></mutation>
                                                                                                                                <next>
                                                                                                                                    <block type="mouse_event" id=";.!s3ci|-dAlW9YWfm.4">
                                                                                                                                        <field name="on">click</field>
                                                                                                                                        <value name="into">
                                                                                                                                            <block type="element" id="|%z9dhp[KV7Z12V.gJP6">
                                                                                                                                                <field name="element">bloc</field>
                                                                                                                                                <field name="NAME">next-question</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <statement name="NAME">
                                                                                                                                            <block type="set_css" id="[hn-;LQ[=*4q,9]eXdT=">
                                                                                                                                                <statement name="css">
                                                                                                                                                    <block type="css_property_set" id="}NAykYnpBg`5,`@drrM(">
                                                                                                                                                        <field name="unit">%</field>
                                                                                                                                                        <value name="property">
                                                                                                                                                            <shadow type="text" id="a2X61;AYY)L8{:rk_lI=">
                                                                                                                                                                <field name="TEXT">width</field>
                                                                                                                                                            </shadow>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="value">
                                                                                                                                                            <shadow type="text" id="c%ki)56g47KY0{ivnoQ~">
                                                                                                                                                                <field name="TEXT">84</field>
                                                                                                                                                            </shadow>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                                <value name="to">
                                                                                                                                                    <block type="element" id="eMYVwb(hsgcPP6Ps.aIX">
                                                                                                                                                        <field name="element">.</field>
                                                                                                                                                        <field name="NAME">progress-bar</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <next>
                                                                                                            <block type="on_input_change_block" id="5u8vO5Q0.{iWb?K]Uorn">
                                                                                                                <field name="input_name" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                <statement name="NAME">
                                                                                                                    <block type="set_button_to_open_tab" id="dU|_D=|_8jW)LnXK]TMQ">
                                                                                                                        <value name="tab">
                                                                                                                            <block type="variables_get" id="vYEATS35rWk@v!uJqp{+">
                                                                                                                                <field name="VAR" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <next>
                                                                                                                            <block type="procedures_callnoreturn" id="d0+YvoQ`#txnw:1S9x3%">
                                                                                                                                <mutation name="Calculate overall score"></mutation>
                                                                                                                                <next>
                                                                                                                                    <block type="procedures_callnoreturn" id="L-g`?!)tC*pdJ*AdF7{A">
                                                                                                                                        <mutation name="calculate cumulative score"></mutation>
                                                                                                                                        <next>
                                                                                                                                            <block type="mouse_event" id="}`ycWp~nx!vuJ(aha/Zl">
                                                                                                                                                <field name="on">click</field>
                                                                                                                                                <value name="into">
                                                                                                                                                    <block type="element" id="lVz?n}lJY{BygmEeLUrW">
                                                                                                                                                        <field name="element">bloc</field>
                                                                                                                                                        <field name="NAME">next-question</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <statement name="NAME">
                                                                                                                                                    <block type="set_css" id="i,;GzBvEyLM~}fLG`6^W">
                                                                                                                                                        <statement name="css">
                                                                                                                                                            <block type="css_property_set" id="Ha6(Wx#9e,tS).7clXax">
                                                                                                                                                                <field name="unit">%</field>
                                                                                                                                                                <value name="property">
                                                                                                                                                                    <shadow type="text" id="z(L%PgXs4JdzrXlaPDY2">
                                                                                                                                                                        <field name="TEXT">width</field>
                                                                                                                                                                    </shadow>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="value">
                                                                                                                                                                    <shadow type="text" id="(a4kg:EOn:)?Lk`+OxCR">
                                                                                                                                                                        <field name="TEXT">91</field>
                                                                                                                                                                    </shadow>
                                                                                                                                                                </value>
                                                                                                                                                            </block>
                                                                                                                                                        </statement>
                                                                                                                                                        <value name="to">
                                                                                                                                                            <block type="element" id="lvstLbY(+==#I*fnvP(c">
                                                                                                                                                                <field name="element">.</field>
                                                                                                                                                                <field name="NAME">progress-bar</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <next>
                                                                                                                    <block type="on_input_change_block" id="%d*n[lgO4uEz;bbGDyGy">
                                                                                                                        <field name="input_name" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                        <statement name="NAME">
                                                                                                                            <block type="set_button_to_open_tab" id="ll+,`WGoc+WwXc2HHG`Y">
                                                                                                                                <value name="tab">
                                                                                                                                    <block type="variables_get" id="Ltq,Ozr7gn=6vIaSb6;O">
                                                                                                                                        <field name="VAR" id="zk[2!in?[.]!bTP,dssI">results_tab</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <next>
                                                                                                                                    <block type="procedures_callnoreturn" id="N8]j)X(*hL}eLfX.FjsO">
                                                                                                                                        <mutation name="Calculate overall score"></mutation>
                                                                                                                                        <next>
                                                                                                                                            <block type="procedures_callnoreturn" id="ot2/YY5Z4fvvymk```77">
                                                                                                                                                <mutation name="calculate cumulative score"></mutation>
                                                                                                                                                <next>
                                                                                                                                                    <block type="change_text" id="Z:Ln7LiD9B_WpBJ}U%Tt">
                                                                                                                                                        <value name="text">
                                                                                                                                                            <block type="text" id="C0VAJ5yTdu^?xZFUgKx{">
                                                                                                                                                                <field name="TEXT">Results</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="element">
                                                                                                                                                            <block type="element" id="MPr_~rz#u62:}-fz%l6a">
                                                                                                                                                                <field name="element">#</field>
                                                                                                                                                                <field name="NAME">next-text</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="set_css" id="u289=QjuT3x1}LSOh5DC">
                                                                                                                                                                <statement name="css">
                                                                                                                                                                    <block type="css_property_set" id="8_1Pu[*=n1AA=aBEP|Ud">
                                                                                                                                                                        <field name="unit">%</field>
                                                                                                                                                                        <value name="property">
                                                                                                                                                                            <shadow type="text" id="x^2+OY%Y2MO~lo}V-=lw">
                                                                                                                                                                                <field name="TEXT">opacity</field>
                                                                                                                                                                            </shadow>
                                                                                                                                                                        </value>
                                                                                                                                                                        <value name="value">
                                                                                                                                                                            <shadow type="text" id="sM5XIb8n}|7Booq}z%S2">
                                                                                                                                                                                <field name="TEXT">100</field>
                                                                                                                                                                            </shadow>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </statement>
                                                                                                                                                                <value name="to">
                                                                                                                                                                    <block type="element" id="Agd1QGRizxoc.1^I7Kmi">
                                                                                                                                                                        <field name="element">.</field>
                                                                                                                                                                        <field name="NAME">progress-bar-gradient</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="mouse_event" id="*_,p]F3cWc,YH?AJgG:h">
                                                                                                                                                                        <field name="on">click</field>
                                                                                                                                                                        <value name="into">
                                                                                                                                                                            <block type="element" id="S%fTlB^l07K^%pgP|}N}">
                                                                                                                                                                                <field name="element">bloc</field>
                                                                                                                                                                                <field name="NAME">next-question</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                        <statement name="NAME">
                                                                                                                                                                            <block type="set_css" id="G4az]AwCvO-7guWPj_V1">
                                                                                                                                                                                <statement name="css">
                                                                                                                                                                                    <block type="css_property_set" id="]lC:/:[]h~seC(U$qgrW">
                                                                                                                                                                                        <field name="unit">%</field>
                                                                                                                                                                                        <value name="property">
                                                                                                                                                                                            <shadow type="text" id="g!--Wb6;9YgK8)W|K*ZD">
                                                                                                                                                                                                <field name="TEXT">width</field>
                                                                                                                                                                                            </shadow>
                                                                                                                                                                                        </value>
                                                                                                                                                                                        <value name="value">
                                                                                                                                                                                            <shadow type="text" id="JpGRto1wv|X^D4Ip5]bt">
                                                                                                                                                                                                <field name="TEXT">100</field>
                                                                                                                                                                                            </shadow>
                                                                                                                                                                                        </value>
                                                                                                                                                                                    </block>
                                                                                                                                                                                </statement>
                                                                                                                                                                                <value name="to">
                                                                                                                                                                                    <block type="element" id="2ZuUX!.)G(KBS{X/pX+7">
                                                                                                                                                                                        <field name="element">.</field>
                                                                                                                                                                                        <field name="NAME">progress-bar</field>
                                                                                                                                                                                    </block>
                                                                                                                                                                                </value>
                                                                                                                                                                            </block>
                                                                                                                                                                        </statement>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </next>
    </block>
    <block type="procedures_defnoreturn" id="q65h9.%:C|F(2:W||UK(" x="2325" y="-255">
        <field name="NAME">Calculate overall score</field>
        <comment pinned="false" h="80" w="160">Describe this function...</comment>
        <statement name="STACK">
            <block type="variables_set" id="%]#z=x|Pa`S,gO$)98y$">
                <field name="VAR" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                <value name="VALUE">
                    <block type="play_number" id="QJ%_de^hA-GxEl?kx//=">
                        <field name="number">0</field>
                    </block>
                </value>
                <next>
                    <block type="variables_set" id="KoZo)qyYpER{X3jiEXFQ">
                        <field name="VAR" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                        <value name="VALUE">
                            <block type="play_number" id="B#6#rM+lVxgR:w_D3H8}">
                                <field name="number">0</field>
                            </block>
                        </value>
                        <next>
                            <block type="variables_set" id="!*[,#8sy,;=iPGQT{cMT">
                                <field name="VAR" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                <value name="VALUE">
                                    <block type="play_number" id="uypQgN=+wG@T!6Z-cKo)">
                                        <field name="number">0</field>
                                    </block>
                                </value>
                                <next>
                                    <block type="variables_set" id="~CCqu6,375A6]p[p)be)">
                                        <field name="VAR" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                        <value name="VALUE">
                                            <block type="play_number" id="U9{n0JlMoo0SO~(8O~*@">
                                                <field name="number">0</field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="controls_if" id="B=CggedWHhw:VTOT`j,)" collapsed="true">
                                                <mutation elseif="4"></mutation>
                                                <value name="IF0">
                                                    <block type="logic_compare" id="i1{e:D}THuSGy^7j)Lr=">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                            <block type="variables_get" id="/!eCMw0-B-%cW*Kj#!s]">
                                                                <field name="VAR" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
                                                            </block>
                                                        </value>
                                                        <value name="B">
                                                            <block type="play_number" id="j%3bvUC+h0t!_Ac(Z%/G">
                                                                <field name="number">1</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <statement name="DO0">
                                                    <block type="set_with_calculation" id="34v0.7`w51IJCJJ*ur-y">
                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                        <field name="NAME">+</field>
                                                        <value name="change">
                                                            <block type="play_number" id="RYs)c8ATKVV~qp33XLKa">
                                                                <field name="number">1</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="set_with_calculation" id="x%[+YQ~_V{D^kw=tTX4e">
                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="9C|a6OM{[x[Lw~i(aaR8">
                                                                        <field name="number">1</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                                <value name="IF1">
                                                    <block type="logic_compare" id="kJ#bD:@RM,`rXZFd:h}A">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                            <block type="variables_get" id="ZPySbkN]hr:]1g3WPR44">
                                                                <field name="VAR" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
                                                            </block>
                                                        </value>
                                                        <value name="B">
                                                            <block type="play_number" id=";L!T:A(Jy2OV46v-X*.p">
                                                                <field name="number">2</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <statement name="DO1">
                                                    <block type="set_with_calculation" id="U4VQN{~g2zhokxJKqvzD">
                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                        <field name="NAME">+</field>
                                                        <value name="change">
                                                            <block type="play_number" id="-(A6#^3:8WjtPd/jBx8G">
                                                                <field name="number">2</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="set_with_calculation" id="2|Iwh!78=T|g[k*_0(xN">
                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="f-aa3tDgYnZ-~yM6Ke4n">
                                                                        <field name="number">2</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                                <value name="IF2">
                                                    <block type="logic_compare" id="b)R!30Fw(BVR9laPT@ue">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                            <block type="variables_get" id="I72|zcf2#f/,YaB2{}^X">
                                                                <field name="VAR" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
                                                            </block>
                                                        </value>
                                                        <value name="B">
                                                            <block type="play_number" id="{)=c[XIMMn4@xHz$}/$,">
                                                                <field name="number">3</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <statement name="DO2">
                                                    <block type="set_with_calculation" id="7}-D8$*,+Y47Ez,MAeg@">
                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                        <field name="NAME">+</field>
                                                        <value name="change">
                                                            <block type="play_number" id="Yn]f`Xcb.DYT,C{DNiHc">
                                                                <field name="number">3</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="set_with_calculation" id="58_=IToHb,.JCpaVyc2Y">
                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="QduUsGOd%-T_YZzftI};">
                                                                        <field name="number">3</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                                <value name="IF3">
                                                    <block type="logic_compare" id="/yugKQb,4JqkQZ4,NF*5">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                            <block type="variables_get" id="yQHs91$+JYR6%P_cGWqi">
                                                                <field name="VAR" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
                                                            </block>
                                                        </value>
                                                        <value name="B">
                                                            <block type="play_number" id="^|pgUc:ZKuE(L?Vq}_Ka">
                                                                <field name="number">4</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <statement name="DO3">
                                                    <block type="set_with_calculation" id="iyz,K;v,/DxhuOpwI1V*">
                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                        <field name="NAME">+</field>
                                                        <value name="change">
                                                            <block type="play_number" id="Q33roTzc)3pc`(Ck_{hl">
                                                                <field name="number">4</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="set_with_calculation" id="~@;x,t,Tymo:1;x%ioV(">
                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="rm-+a%frHTA7.-K6qVf_">
                                                                        <field name="number">4</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                                <value name="IF4">
                                                    <block type="logic_compare" id="CS@]?sf@;$w90cg`N~i`">
                                                        <field name="OP">EQ</field>
                                                        <value name="A">
                                                            <block type="variables_get" id=",M8R-My(ihOb8B/Ec,{t">
                                                                <field name="VAR" id="WpqxAGl{cT)@wa+E.MXU">q1</field>
                                                            </block>
                                                        </value>
                                                        <value name="B">
                                                            <block type="play_number" id="mgXYj=v+yz6`E0Cr0iM_">
                                                                <field name="number">5</field>
                                                            </block>
                                                        </value>
                                                    </block>
                                                </value>
                                                <statement name="DO4">
                                                    <block type="set_with_calculation" id="Qw:1_OJ^+l4UR#jK4xNP">
                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                        <field name="NAME">+</field>
                                                        <value name="change">
                                                            <block type="play_number" id="3ftMJwJ+DIw8~=BR.}o^">
                                                                <field name="number">5</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="set_with_calculation" id=".]K$nlOs,uN^|StkrZF~">
                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="nmP.zdiFDSX*Nbcd}/5B">
                                                                        <field name="number">5</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </statement>
                                                <next>
                                                    <block type="controls_if" id="K8:FjIl7|}7ahYr+vozN" collapsed="true">
                                                        <mutation elseif="4"></mutation>
                                                        <value name="IF0">
                                                            <block type="logic_compare" id="x?D6YAquR*cewZ.M1{Eq">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                    <block type="variables_get" id="S9zzUemJrF0s;~Cplrh2">
                                                                        <field name="VAR" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                                                                    </block>
                                                                </value>
                                                                <value name="B">
                                                                    <block type="play_number" id="*yV}:kZt2Xb_1YNfCi(E">
                                                                        <field name="number">1</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <statement name="DO0">
                                                            <block type="set_with_calculation" id="=sVH*wa-U|Rd;.W.w`,B">
                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="t-+LUxnYY4@_@@5hb-jl">
                                                                        <field name="number">1</field>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="set_with_calculation" id="eZtzk0wM/VXhCJC9*9xU">
                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id=";~dMB1a$pO9b-CRq.o#W">
                                                                                <field name="number">1</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </statement>
                                                        <value name="IF1">
                                                            <block type="logic_compare" id="|*?N!!O8WT*q!.w*g2TI">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                    <block type="variables_get" id="eh%*+8e.A-Iv^;I,,C,Z">
                                                                        <field name="VAR" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                                                                    </block>
                                                                </value>
                                                                <value name="B">
                                                                    <block type="play_number" id="-!o!FM{@4=;-O13`4Vug">
                                                                        <field name="number">2</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <statement name="DO1">
                                                            <block type="set_with_calculation" id="4;N-2*C:6C(};A+!j-eo">
                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="J9e6sr9|%]|}k9MX+mMZ">
                                                                        <field name="number">2</field>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="set_with_calculation" id="|`D|%JO$A-e_=L~#7#hd">
                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="98_g.V^MK}%H(@o.;z.B">
                                                                                <field name="number">2</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </statement>
                                                        <value name="IF2">
                                                            <block type="logic_compare" id="IArGDC%(~%$Yt|jq-Ac_">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                    <block type="variables_get" id="HAKwK_b_MoJ[a!%1t%5%">
                                                                        <field name="VAR" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                                                                    </block>
                                                                </value>
                                                                <value name="B">
                                                                    <block type="play_number" id="OV:UEsz{+Ds1Wl5!}QkD">
                                                                        <field name="number">3</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <statement name="DO2">
                                                            <block type="set_with_calculation" id="af46h^vj:QNfORlTh|Ro">
                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="?0(D=v0h#dHL21+l^0_1">
                                                                        <field name="number">3</field>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="set_with_calculation" id="~$I](dE}Y2$vx`ZiGR4]">
                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="$?*D7erFX[N:-vqUk8x!">
                                                                                <field name="number">3</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </statement>
                                                        <value name="IF3">
                                                            <block type="logic_compare" id="UzX-t8@HtOsM(T@@uuEk">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                    <block type="variables_get" id="*Mx[*d1%AB9(fPX_24Kc">
                                                                        <field name="VAR" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                                                                    </block>
                                                                </value>
                                                                <value name="B">
                                                                    <block type="play_number" id="=y=M]MT|^]V!8wRUoQ%{">
                                                                        <field name="number">4</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <statement name="DO3">
                                                            <block type="set_with_calculation" id="E(W]%7s45LI^.(WW{g0E">
                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="8_,NK/$GVqvJ.]O+`#@}">
                                                                        <field name="number">4</field>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="set_with_calculation" id="flCQB85$mth?T#JBH:UL">
                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="z^~fB;=dvn9:)zzhN^8,">
                                                                                <field name="number">4</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </statement>
                                                        <value name="IF4">
                                                            <block type="logic_compare" id="=N%|VZ9)~@o1i;I-B*i:">
                                                                <field name="OP">EQ</field>
                                                                <value name="A">
                                                                    <block type="variables_get" id="^3RM7#eCG/t+N_IekmL!">
                                                                        <field name="VAR" id="zy8le#Y?XzH!LIm9iB$4">q2</field>
                                                                    </block>
                                                                </value>
                                                                <value name="B">
                                                                    <block type="play_number" id="*q%`OCF|J2bO{`(|SXNv">
                                                                        <field name="number">5</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <statement name="DO4">
                                                            <block type="set_with_calculation" id="Q=9;#3tckk3knmB^!KBT">
                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                <field name="NAME">+</field>
                                                                <value name="change">
                                                                    <block type="play_number" id="-H]oobq/yb%19dyQcOT@">
                                                                        <field name="number">5</field>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="set_with_calculation" id="D]Md:5?$cA1:4PM?S9^_">
                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="ymBaLOj[Fmw?I)Xn.x8f">
                                                                                <field name="number">5</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </statement>
                                                        <next>
                                                            <block type="controls_if" id="S2!3{g1}t%LEDL[%;*Pv" collapsed="true">
                                                                <mutation elseif="4"></mutation>
                                                                <value name="IF0">
                                                                    <block type="logic_compare" id="Q[~n}D,#0^6V#U8xn~o!">
                                                                        <field name="OP">EQ</field>
                                                                        <value name="A">
                                                                            <block type="variables_get" id="SejufXZ/NUwT6rioN6H*">
                                                                                <field name="VAR" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <block type="play_number" id="x|^Ms1V|jAB5i_95%MFG">
                                                                                <field name="number">1</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <statement name="DO0">
                                                                    <block type="set_with_calculation" id="NcO@~H`pi40e{s$wJuOs">
                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="#pv?@gYW:OmIw2e79[mE">
                                                                                <field name="number">1</field>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="set_with_calculation" id="cX!8WiK/S=qId5]4;f8%">
                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id=":4c:GwUsM!R/{;Ds/.,m">
                                                                                        <field name="number">1</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </statement>
                                                                <value name="IF1">
                                                                    <block type="logic_compare" id="[.H/5~W5jLYS!f0OaKW9">
                                                                        <field name="OP">EQ</field>
                                                                        <value name="A">
                                                                            <block type="variables_get" id="KVCzySACz^7vLOpr}2?M">
                                                                                <field name="VAR" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <block type="play_number" id="W:4?^l:_#Zo7{8^5(uP(">
                                                                                <field name="number">2</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <statement name="DO1">
                                                                    <block type="set_with_calculation" id="O%7KM.%D*vlbmQ*!fP9S">
                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="BuJdB+:f{|U8^K;ru/!8">
                                                                                <field name="number">2</field>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="set_with_calculation" id="nZww0=3{;8[Si`[g3(+E">
                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="zrUr)a/53mfXod^2g,`b">
                                                                                        <field name="number">2</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </statement>
                                                                <value name="IF2">
                                                                    <block type="logic_compare" id="M(}n5Sj(R:B55VoG71,w">
                                                                        <field name="OP">EQ</field>
                                                                        <value name="A">
                                                                            <block type="variables_get" id="0QTLs/;sa^i5`,fvQA4;">
                                                                                <field name="VAR" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <block type="play_number" id="|CmSk*lh8s;SrYz{wSqF">
                                                                                <field name="number">3</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <statement name="DO2">
                                                                    <block type="set_with_calculation" id="aS-n^{8vV:r$,aZDd^I%">
                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="_;cOzrS3I|/+e)%:KC#s">
                                                                                <field name="number">3</field>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="set_with_calculation" id="tnqcgnv1N7!VsUF*LXi1">
                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="|EILaSNV#{FA{`.gRYq4">
                                                                                        <field name="number">3</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </statement>
                                                                <value name="IF3">
                                                                    <block type="logic_compare" id="L~S(^P99YhxeI]9{DFYK">
                                                                        <field name="OP">EQ</field>
                                                                        <value name="A">
                                                                            <block type="variables_get" id="{tIF7Qw%wfF:~aK{,VzR">
                                                                                <field name="VAR" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <block type="play_number" id="AYlh:v[qCgNfY7m:)L=b">
                                                                                <field name="number">4</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <statement name="DO3">
                                                                    <block type="set_with_calculation" id=".it6lwt2H(]+,@.]}Qv+">
                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id=",{XEV@Tmnx6s=b3T{tJ1">
                                                                                <field name="number">4</field>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="set_with_calculation" id="*KPC(fSOtnVzmP=GELA~">
                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="~N#=a?+TAy9x^oE$n{rt">
                                                                                        <field name="number">4</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </statement>
                                                                <value name="IF4">
                                                                    <block type="logic_compare" id="[oC1BpGSsVV1^=z#5anC">
                                                                        <field name="OP">EQ</field>
                                                                        <value name="A">
                                                                            <block type="variables_get" id="G0y?x9c.5+!HNHTjA?{S">
                                                                                <field name="VAR" id="db`kYES!:BCLs;qIgcKA">q3</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <block type="play_number" id="`)-0xuXs}N*y8JIK/i}p">
                                                                                <field name="number">5</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <statement name="DO4">
                                                                    <block type="set_with_calculation" id="NJ4_bp@BY~RDnHl#f+pJ">
                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                        <field name="NAME">+</field>
                                                                        <value name="change">
                                                                            <block type="play_number" id="yr]gXHI@dYde`C,I;oRF">
                                                                                <field name="number">5</field>
                                                                            </block>
                                                                        </value>
                                                                        <next>
                                                                            <block type="set_with_calculation" id="uAJT_IyhHAk$B4a?O0oA">
                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="I.wf^A8)ymXsRFZF5$}b">
                                                                                        <field name="number">5</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </statement>
                                                                <next>
                                                                    <block type="controls_if" id="rJ?fw#DX0LdmFBvU(e~M" collapsed="true">
                                                                        <mutation elseif="4"></mutation>
                                                                        <value name="IF0">
                                                                            <block type="logic_compare" id="N4_`aw1nz9*O?]~y0Vd)">
                                                                                <field name="OP">EQ</field>
                                                                                <value name="A">
                                                                                    <block type="variables_get" id="H~TN9pka6,#t.F4x*GIH">
                                                                                        <field name="VAR" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="B">
                                                                                    <block type="play_number" id="q#S`m~(bwN#/ob[){+Un">
                                                                                        <field name="number">1</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <statement name="DO0">
                                                                            <block type="set_with_calculation" id="mvGU!H]ob!^6n-xR[q).">
                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="p:$%^X6mk`3gOO/9j8c,">
                                                                                        <field name="number">1</field>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="set_with_calculation" id="32$O!f^]J+pZNrUp8/.a">
                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="!i(X#k/b(ECSI7P/.%t)">
                                                                                                <field name="number">1</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </statement>
                                                                        <value name="IF1">
                                                                            <block type="logic_compare" id="!PM]p:aBsg3%LrfWE2n,">
                                                                                <field name="OP">EQ</field>
                                                                                <value name="A">
                                                                                    <block type="variables_get" id="GTpNCc#!OO+n5q}!@!0o">
                                                                                        <field name="VAR" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="B">
                                                                                    <block type="play_number" id="zK^$6Ofb%u@EX0Eh#6;Y">
                                                                                        <field name="number">2</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <statement name="DO1">
                                                                            <block type="set_with_calculation" id="+O:anmm0U@6:6N3DfnpM">
                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="lk#9W:4s;nIC?Pfp4_C$">
                                                                                        <field name="number">2</field>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="set_with_calculation" id="6i@F@l:#{g`[PB[S^J/~">
                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="12`~=/L-T{@buWJN3j~b">
                                                                                                <field name="number">2</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </statement>
                                                                        <value name="IF2">
                                                                            <block type="logic_compare" id="|{4-L((g}U9up.jGJaI8">
                                                                                <field name="OP">EQ</field>
                                                                                <value name="A">
                                                                                    <block type="variables_get" id="1]DLH^Cfo_;#zo{}r{dV">
                                                                                        <field name="VAR" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="B">
                                                                                    <block type="play_number" id="z/t3#tf);uo!GLIq;cgg">
                                                                                        <field name="number">3</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <statement name="DO2">
                                                                            <block type="set_with_calculation" id="fM9k9c6}t(;;s+[]4_,V">
                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id="uxFOFpbTZc6:M=q::_12">
                                                                                        <field name="number">3</field>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="set_with_calculation" id="5LY7EtNk[Mzu~H?;HsMh">
                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="V#:!I:vz?6^:%Y%IsoD(">
                                                                                                <field name="number">3</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </statement>
                                                                        <value name="IF3">
                                                                            <block type="logic_compare" id="F|Sch~AQ.k9xov4Nnny!">
                                                                                <field name="OP">EQ</field>
                                                                                <value name="A">
                                                                                    <block type="variables_get" id="1LAkvaML$T;:jw_x6:19">
                                                                                        <field name="VAR" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="B">
                                                                                    <block type="play_number" id=")ztP0_UXh-cfHJ9{Z}qG">
                                                                                        <field name="number">4</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <statement name="DO3">
                                                                            <block type="set_with_calculation" id="zw0C-0.P~`AZzvGe2I%=">
                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id=",lv8?(,C;CAxgri[I./v">
                                                                                        <field name="number">4</field>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="set_with_calculation" id="Gy/pT3*3lAWuJGq!IKxX">
                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="h*%zEynoV1ss4Nyj;-ql">
                                                                                                <field name="number">4</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </statement>
                                                                        <value name="IF4">
                                                                            <block type="logic_compare" id="Y}ysbCR~-%8/3?stti:3">
                                                                                <field name="OP">EQ</field>
                                                                                <value name="A">
                                                                                    <block type="variables_get" id="VQ@x8q]@%1~%s08GY=oD">
                                                                                        <field name="VAR" id="PU.Jq(JL@7pyU-OXMBVm">q4</field>
                                                                                    </block>
                                                                                </value>
                                                                                <value name="B">
                                                                                    <block type="play_number" id="*k``:J3*Z~,661*]wFgC">
                                                                                        <field name="number">5</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <statement name="DO4">
                                                                            <block type="set_with_calculation" id="}]H5rZ.6U:P2R,(8c)i5">
                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                <field name="NAME">+</field>
                                                                                <value name="change">
                                                                                    <block type="play_number" id=";:v/d+mwQ!rZ/Vm:q!W:">
                                                                                        <field name="number">5</field>
                                                                                    </block>
                                                                                </value>
                                                                                <next>
                                                                                    <block type="set_with_calculation" id="9OR=@EtgX|NFKjw4^]G6">
                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="1B}j=r16[ZOn`?[bht2F">
                                                                                                <field name="number">5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </statement>
                                                                        <next>
                                                                            <block type="controls_if" id="c*+t%uB^9CIMLFOMlVw-" collapsed="true">
                                                                                <mutation elseif="4"></mutation>
                                                                                <value name="IF0">
                                                                                    <block type="logic_compare" id="G!z!E49+Zd_/f8fl;()G">
                                                                                        <field name="OP">EQ</field>
                                                                                        <value name="A">
                                                                                            <block type="variables_get" id="yGh=:(_0vhti-%(_l]yy">
                                                                                                <field name="VAR" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="B">
                                                                                            <block type="play_number" id=".-[;PCWsTQwArOE,*[t(">
                                                                                                <field name="number">1</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                                <statement name="DO0">
                                                                                    <block type="set_with_calculation" id="DA-}?TEgJiH^Eo~%9Nh|">
                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id=":ZQUDCG]evBG`KwWMast">
                                                                                                <field name="number">1</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="set_with_calculation" id="4Z$$}n{TjVxesDTS_Vx!">
                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="e.tnhHPoTFf5jfC[HK$l">
                                                                                                        <field name="number">1</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </statement>
                                                                                <value name="IF1">
                                                                                    <block type="logic_compare" id="Mb$SV_O699(sA*f)5]-,">
                                                                                        <field name="OP">EQ</field>
                                                                                        <value name="A">
                                                                                            <block type="variables_get" id="u_8z^;{g=}Q0f,]U8Q.:">
                                                                                                <field name="VAR" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="B">
                                                                                            <block type="play_number" id="_HRzJ5gjMK=Ta,g.Q%92">
                                                                                                <field name="number">2</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                                <statement name="DO1">
                                                                                    <block type="set_with_calculation" id="NNcmBW[j]r}/5w5~/F9M">
                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="uaj`!LrSeTBYLES[E|oh">
                                                                                                <field name="number">2</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="set_with_calculation" id="aEIu0fb*R;(C1{3@6[sa">
                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="bfQep}waU{-8dgpY8-Z3">
                                                                                                        <field name="number">2</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </statement>
                                                                                <value name="IF2">
                                                                                    <block type="logic_compare" id="!ywsZn_7F=n~dS96.mt_">
                                                                                        <field name="OP">EQ</field>
                                                                                        <value name="A">
                                                                                            <block type="variables_get" id="Pg}D6+3QVSyq^P7`lVqk">
                                                                                                <field name="VAR" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="B">
                                                                                            <block type="play_number" id="y9:]XNj,%@f~B!xyCB+(">
                                                                                                <field name="number">3</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                                <statement name="DO2">
                                                                                    <block type="set_with_calculation" id="ox`pws|@JwLOC?A8?BG}">
                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="sZy4Dt_luy+|,cOGVvl1">
                                                                                                <field name="number">3</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="set_with_calculation" id="k:kf=SM++FVa*fWw)AZ3">
                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="Ct(Y*cqa?Tm:nsm+U2Cc">
                                                                                                        <field name="number">3</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </statement>
                                                                                <value name="IF3">
                                                                                    <block type="logic_compare" id="hT(K.6]V[TjidIDfek7N">
                                                                                        <field name="OP">EQ</field>
                                                                                        <value name="A">
                                                                                            <block type="variables_get" id="4oLF?RrE/wF^Nf(hkSub">
                                                                                                <field name="VAR" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="B">
                                                                                            <block type="play_number" id="ouLz6Hno7me4P8]S3FK1">
                                                                                                <field name="number">4</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                                <statement name="DO3">
                                                                                    <block type="set_with_calculation" id="Z$G*+K:`1_w|`eOizGa0">
                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="v]hV1X4}/;76Q4{gczXY">
                                                                                                <field name="number">4</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="set_with_calculation" id="h.NDPxbd}ZIQ4x}#yy7-">
                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="#=uE1$z4=)41e/g!%EMP">
                                                                                                        <field name="number">4</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </statement>
                                                                                <value name="IF4">
                                                                                    <block type="logic_compare" id="4xF5~#Gh4Nb;;!3uSBO+">
                                                                                        <field name="OP">EQ</field>
                                                                                        <value name="A">
                                                                                            <block type="variables_get" id="iY^//dB)n#8O`[sQ%YHm">
                                                                                                <field name="VAR" id="HEiQI#ChFM?EwoZVB+B8">q5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <value name="B">
                                                                                            <block type="play_number" id="-ew;yu+~7|i@0D;idCCn">
                                                                                                <field name="number">5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                    </block>
                                                                                </value>
                                                                                <statement name="DO4">
                                                                                    <block type="set_with_calculation" id="*Sg%~9pbN2J0G:$Ei3*?">
                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                        <field name="NAME">+</field>
                                                                                        <value name="change">
                                                                                            <block type="play_number" id="aQ?:4j`FGF{_HOyw9P0w">
                                                                                                <field name="number">5</field>
                                                                                            </block>
                                                                                        </value>
                                                                                        <next>
                                                                                            <block type="set_with_calculation" id=":4ZLC=gveodK4;WGH43]">
                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="m-QW0dxs`HYKbF0Bya_N">
                                                                                                        <field name="number">5</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </statement>
                                                                                <next>
                                                                                    <block type="controls_if" id="ikDx(WDi/u=J.K]yuy7[" collapsed="true">
                                                                                        <mutation elseif="4"></mutation>
                                                                                        <value name="IF0">
                                                                                            <block type="logic_compare" id="OmdG-ZacLhn*YB?AZ[-R">
                                                                                                <field name="OP">EQ</field>
                                                                                                <value name="A">
                                                                                                    <block type="variables_get" id="|02L4`dc-o}8u@-6{Q-A">
                                                                                                        <field name="VAR" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <value name="B">
                                                                                                    <block type="play_number" id="=dY64Y|,Q`cZDY9E434u">
                                                                                                        <field name="number">1</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </value>
                                                                                        <statement name="DO0">
                                                                                            <block type="set_with_calculation" id="Vw-;~9J/QJevt/v6)9dF">
                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="E#8a|l;7}osL*Bs}%6Xc">
                                                                                                        <field name="number">1</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="set_with_calculation" id="OIQCAg`-(6Lk(z[.@t]}">
                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id=";kzAw^Ib$h2J^M=|!L,D">
                                                                                                                <field name="number">1</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <value name="IF1">
                                                                                            <block type="logic_compare" id="jne~7Fm]kp]@,y^o;X)A">
                                                                                                <field name="OP">EQ</field>
                                                                                                <value name="A">
                                                                                                    <block type="variables_get" id="5q.,OTa)az.FtXfj98LO">
                                                                                                        <field name="VAR" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <value name="B">
                                                                                                    <block type="play_number" id="4gkOc6j$4EoV[{)r5yl+">
                                                                                                        <field name="number">2</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </value>
                                                                                        <statement name="DO1">
                                                                                            <block type="set_with_calculation" id="~}{=clsDDlWf$ae]n(RQ">
                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="sw[A+!!IeTSr|5wS1+Jm">
                                                                                                        <field name="number">2</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="set_with_calculation" id="mA7xK1[xzs1-R-h3v#-*">
                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="tJI*dW3!:fm+f@L9O`V1">
                                                                                                                <field name="number">2</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <value name="IF2">
                                                                                            <block type="logic_compare" id="V/{)mQcX@nM3M|pMd8(5">
                                                                                                <field name="OP">EQ</field>
                                                                                                <value name="A">
                                                                                                    <block type="variables_get" id="naClEwL.#-AnG?qU-Id4">
                                                                                                        <field name="VAR" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <value name="B">
                                                                                                    <block type="play_number" id="[kVpUdg2NS?g;rLg:0*S">
                                                                                                        <field name="number">3</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </value>
                                                                                        <statement name="DO2">
                                                                                            <block type="set_with_calculation" id="fgf@-Bq9_JgP`Rwyv[1d">
                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="a)6B8yzG$MFl=0n`qnQ=">
                                                                                                        <field name="number">3</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="set_with_calculation" id="?NXyKA6ze%m/S@daw-=`">
                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="y#n;;7B0xWslrqNsuK^t">
                                                                                                                <field name="number">3</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <value name="IF3">
                                                                                            <block type="logic_compare" id="5Ab75!mFk2wmKAtHa$D8">
                                                                                                <field name="OP">EQ</field>
                                                                                                <value name="A">
                                                                                                    <block type="variables_get" id="D^Z?t+~4T8^)+^i)HF2:">
                                                                                                        <field name="VAR" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <value name="B">
                                                                                                    <block type="play_number" id="yqIf_5SwnmW^HUDJY*88">
                                                                                                        <field name="number">4</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </value>
                                                                                        <statement name="DO3">
                                                                                            <block type="set_with_calculation" id="1H?ck70=fIc`joVyKaa3">
                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="+PHEH}%Xv^s,+hXoRQP_">
                                                                                                        <field name="number">4</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="set_with_calculation" id="HchypN,nK9;83:I^HtID">
                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="~#nRCvM(L(n~:!`X:Jst">
                                                                                                                <field name="number">4</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <value name="IF4">
                                                                                            <block type="logic_compare" id="58@jTM_^)lvRhqZyL?-=">
                                                                                                <field name="OP">EQ</field>
                                                                                                <value name="A">
                                                                                                    <block type="variables_get" id="[L?{rigq`u.Senklm[J=">
                                                                                                        <field name="VAR" id="F+4R[X+Np@kFMi`tfr3%">q6</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <value name="B">
                                                                                                    <block type="play_number" id="~R4_6;Nz=%@J0Nk|r@+}">
                                                                                                        <field name="number">5</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                            </block>
                                                                                        </value>
                                                                                        <statement name="DO4">
                                                                                            <block type="set_with_calculation" id="p$Y|%~!P,SckMv2tU1Wc">
                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                <field name="NAME">+</field>
                                                                                                <value name="change">
                                                                                                    <block type="play_number" id="UhW/(pS%h@]_/fSnhkI+">
                                                                                                        <field name="number">5</field>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <next>
                                                                                                    <block type="set_with_calculation" id="2.K#A#sS|U/b3qBe-Sz_">
                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="Ml%(R#)cIFnLreL]@Y*_">
                                                                                                                <field name="number">5</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </statement>
                                                                                        <next>
                                                                                            <block type="controls_if" id="j`}+#rk:;*,Uh{j]ORmh" collapsed="true">
                                                                                                <mutation elseif="4"></mutation>
                                                                                                <value name="IF0">
                                                                                                    <block type="logic_compare" id=")o)WsuRVhjIHteM`*Lau">
                                                                                                        <field name="OP">EQ</field>
                                                                                                        <value name="A">
                                                                                                            <block type="variables_get" id="AD0#8q]:5_6;O?I?ciS]">
                                                                                                                <field name="VAR" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <value name="B">
                                                                                                            <block type="play_number" id="5!!i2=66M$K}sfwjqKtA">
                                                                                                                <field name="number">1</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <statement name="DO0">
                                                                                                    <block type="set_with_calculation" id="QV)H4!pDzn9U6Y,zp!wL">
                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="rBN7_SB4CqS8AHE/v5,d">
                                                                                                                <field name="number">1</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <next>
                                                                                                            <block type="set_with_calculation" id="rBuX4ISEH41nu`1p`j*L">
                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="+ZC/h,)f4Tda*K0}esHs">
                                                                                                                        <field name="number">1</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <value name="IF1">
                                                                                                    <block type="logic_compare" id="LP4c9~_i^[@VIglW}dcE">
                                                                                                        <field name="OP">EQ</field>
                                                                                                        <value name="A">
                                                                                                            <block type="variables_get" id="czlEk#I/sFXxXr4H!`|}">
                                                                                                                <field name="VAR" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <value name="B">
                                                                                                            <block type="play_number" id="6~6zMRIfQSJZbBA2~?-?">
                                                                                                                <field name="number">2</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <statement name="DO1">
                                                                                                    <block type="set_with_calculation" id="*L$IxX@h_*#LHZ@MZ(f$">
                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="Xm2~?[SkKVsW;My,[t3D">
                                                                                                                <field name="number">2</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <next>
                                                                                                            <block type="set_with_calculation" id="0f.tgt`wBhFJhFlScWd#">
                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="zW[][$vPQ~2--j.ilPoA">
                                                                                                                        <field name="number">2</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <value name="IF2">
                                                                                                    <block type="logic_compare" id=";32!*anPP_sJcZ*b5_w`">
                                                                                                        <field name="OP">EQ</field>
                                                                                                        <value name="A">
                                                                                                            <block type="variables_get" id="vkZk,AYXp@n8.zx8~+jM">
                                                                                                                <field name="VAR" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <value name="B">
                                                                                                            <block type="play_number" id="FFD-vj=tqg__Ny)emURo">
                                                                                                                <field name="number">3</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <statement name="DO2">
                                                                                                    <block type="set_with_calculation" id="AXY%|*1a9Wc:/d.QK4A6">
                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="2i2v!#kOL2(|eB)6]8}x">
                                                                                                                <field name="number">3</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <next>
                                                                                                            <block type="set_with_calculation" id="+%XD#eMz)9x6$91K(Ua5">
                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="{|+By?Pp/v2b0iDPy)jz">
                                                                                                                        <field name="number">3</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <value name="IF3">
                                                                                                    <block type="logic_compare" id="4(*[ywhdHbkd65NQJ3Wk">
                                                                                                        <field name="OP">EQ</field>
                                                                                                        <value name="A">
                                                                                                            <block type="variables_get" id="3Hi6UTu#c[%a;9;;)Ke+">
                                                                                                                <field name="VAR" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <value name="B">
                                                                                                            <block type="play_number" id="V9E}n7GUajUzH8zKn8O$">
                                                                                                                <field name="number">4</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <statement name="DO3">
                                                                                                    <block type="set_with_calculation" id="R#0.t5;b-tL%o;@bw(b,">
                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="w.!_yBk+?w!}39AUc,;}">
                                                                                                                <field name="number">4</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <next>
                                                                                                            <block type="set_with_calculation" id="`zs%@t;_euh5bnp-lk-L">
                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="uPGCXK@O(=~R^+=-|r/u">
                                                                                                                        <field name="number">4</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <value name="IF4">
                                                                                                    <block type="logic_compare" id="8ye?OX-8*@(P%X`S_/X4">
                                                                                                        <field name="OP">EQ</field>
                                                                                                        <value name="A">
                                                                                                            <block type="variables_get" id="QaP~JtIbhB/t)H.lCumg">
                                                                                                                <field name="VAR" id="+MgL%7YWwkv}2b46#t%i">q7</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <value name="B">
                                                                                                            <block type="play_number" id="J~/GOm{.Cs(37^+}Msm#">
                                                                                                                <field name="number">5</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                    </block>
                                                                                                </value>
                                                                                                <statement name="DO4">
                                                                                                    <block type="set_with_calculation" id="/Z+.@s-J4vgF,bfdUly@">
                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                        <field name="NAME">+</field>
                                                                                                        <value name="change">
                                                                                                            <block type="play_number" id="Duv*v90)Yn?(qqxDzEkc">
                                                                                                                <field name="number">5</field>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <next>
                                                                                                            <block type="set_with_calculation" id="!]v:V,5aYG|Ko~w~(/%h">
                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="8LBM%3r?7OU8Q9ix|8*{">
                                                                                                                        <field name="number">5</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </statement>
                                                                                                <next>
                                                                                                    <block type="controls_if" id="@%:%~kmC1B|P$]xYC/S$" collapsed="true">
                                                                                                        <mutation elseif="4"></mutation>
                                                                                                        <value name="IF0">
                                                                                                            <block type="logic_compare" id="/bSzVZWERk!YAW]z)|2/">
                                                                                                                <field name="OP">EQ</field>
                                                                                                                <value name="A">
                                                                                                                    <block type="variables_get" id="b`lk)KuD02@@_Af/);`v">
                                                                                                                        <field name="VAR" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <value name="B">
                                                                                                                    <block type="play_number" id="9Zcg]}w+S#pt;gFwc|V7">
                                                                                                                        <field name="number">1</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <statement name="DO0">
                                                                                                            <block type="set_with_calculation" id="Ob#a!VZKoRY%3qYwrUnY">
                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="Vt?vPH-nDB{6egrc?o?P">
                                                                                                                        <field name="number">1</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <next>
                                                                                                                    <block type="set_with_calculation" id="^p=nJ[(4}!zpm#h+9^rd">
                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="!k{KNg?(g9#~)ssf._j[">
                                                                                                                                <field name="number">1</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <value name="IF1">
                                                                                                            <block type="logic_compare" id="`]|$uIk_.Sk3M)6E~)E!">
                                                                                                                <field name="OP">EQ</field>
                                                                                                                <value name="A">
                                                                                                                    <block type="variables_get" id="LqabH[y::aGTh}Kd]Nn)">
                                                                                                                        <field name="VAR" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <value name="B">
                                                                                                                    <block type="play_number" id="X=d(2lNpj|VqyiMi841)">
                                                                                                                        <field name="number">2</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <statement name="DO1">
                                                                                                            <block type="set_with_calculation" id="iR!kx`h3,t+R$TLdHMgN">
                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="~ub;Uu6+~O9mD+$c-T1l">
                                                                                                                        <field name="number">2</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <next>
                                                                                                                    <block type="set_with_calculation" id="@UA:0E)l,p3Fa/N:OG$Y">
                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="nJ81l3v3;n(qy1#t.R7Z">
                                                                                                                                <field name="number">2</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <value name="IF2">
                                                                                                            <block type="logic_compare" id="$`:xc0s0rU!DZ{#T@-${">
                                                                                                                <field name="OP">EQ</field>
                                                                                                                <value name="A">
                                                                                                                    <block type="variables_get" id="1620UM5$sLN8;q%QJHZt">
                                                                                                                        <field name="VAR" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <value name="B">
                                                                                                                    <block type="play_number" id="8t3nh1ex$y]g;sf+y|Ok">
                                                                                                                        <field name="number">3</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <statement name="DO2">
                                                                                                            <block type="set_with_calculation" id="-yOLOd/$+jrk]r$uZ*W.">
                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="~ZgVOg~4K~km/0ZlYQ`3">
                                                                                                                        <field name="number">3</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <next>
                                                                                                                    <block type="set_with_calculation" id="fogAYvx6tP2v4`j=#9zC">
                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="aa=Lw+bwet2T.18i~BdL">
                                                                                                                                <field name="number">3</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <value name="IF3">
                                                                                                            <block type="logic_compare" id="p9Zqtd_9j:tA5gAw}=3x">
                                                                                                                <field name="OP">EQ</field>
                                                                                                                <value name="A">
                                                                                                                    <block type="variables_get" id="Z3wi@YIH/#[ZhhWSu3y7">
                                                                                                                        <field name="VAR" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <value name="B">
                                                                                                                    <block type="play_number" id="5Pt53_H!J3bG[IweJr%q">
                                                                                                                        <field name="number">4</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <statement name="DO3">
                                                                                                            <block type="set_with_calculation" id="mj9TB%JykfF7-mU^TzPi">
                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="gUF|jOXOC.0c{{pL2.b[">
                                                                                                                        <field name="number">4</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <next>
                                                                                                                    <block type="set_with_calculation" id="7Bw9C$wMYq{wafAM50-.">
                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="{(B%y6VtIM{p965s4Ihd">
                                                                                                                                <field name="number">4</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <value name="IF4">
                                                                                                            <block type="logic_compare" id="09xf+?DJd#RttMV5:Vm+">
                                                                                                                <field name="OP">EQ</field>
                                                                                                                <value name="A">
                                                                                                                    <block type="variables_get" id="_xHI]lmP$mLB*m8HRhrZ">
                                                                                                                        <field name="VAR" id="TR,Sv}pAnOqnBu+2xfw^">q8</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <value name="B">
                                                                                                                    <block type="play_number" id="9v6l^*-|SUy78d3(lg;@">
                                                                                                                        <field name="number">5</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                            </block>
                                                                                                        </value>
                                                                                                        <statement name="DO4">
                                                                                                            <block type="set_with_calculation" id=")H3YcjI0*%Q$%r~k]r0j">
                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                <field name="NAME">+</field>
                                                                                                                <value name="change">
                                                                                                                    <block type="play_number" id="7sR6cGnIK+O@l?ZvR^GA">
                                                                                                                        <field name="number">5</field>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <next>
                                                                                                                    <block type="set_with_calculation" id=",[Q=/8`$SuPP/M0[A@bZ">
                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="gLx?/%w$4Wwgj`^9@Q;`">
                                                                                                                                <field name="number">5</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </statement>
                                                                                                        <next>
                                                                                                            <block type="controls_if" id="0Yn/H?,wOD~i0}2%$Uc|" collapsed="true">
                                                                                                                <mutation elseif="4"></mutation>
                                                                                                                <value name="IF0">
                                                                                                                    <block type="logic_compare" id="Y^YI,S;MErL|Le%tlN%D">
                                                                                                                        <field name="OP">EQ</field>
                                                                                                                        <value name="A">
                                                                                                                            <block type="variables_get" id="k!p07RnE`pnA/W#_-ws1">
                                                                                                                                <field name="VAR" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <value name="B">
                                                                                                                            <block type="play_number" id="gFk8+{KX^6h6zomf3co:">
                                                                                                                                <field name="number">1</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <statement name="DO0">
                                                                                                                    <block type="set_with_calculation" id="uD:UUW=l`rLP+g{^}2et">
                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="E;@D.,NO/[SU_z7@1CMT">
                                                                                                                                <field name="number">1</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <next>
                                                                                                                            <block type="set_with_calculation" id="_jwA~@N.qUHm*:$?Zl3L">
                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="]3Emrd+}1vejT}BC#GC=">
                                                                                                                                        <field name="number">1</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <value name="IF1">
                                                                                                                    <block type="logic_compare" id="f1{AD*_(w,Q@0Rnol/Qd">
                                                                                                                        <field name="OP">EQ</field>
                                                                                                                        <value name="A">
                                                                                                                            <block type="variables_get" id="cvL7(F$YKwEr~n@22GVZ">
                                                                                                                                <field name="VAR" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <value name="B">
                                                                                                                            <block type="play_number" id=";XW)vX2qU|ru8+5Y~j59">
                                                                                                                                <field name="number">2</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <statement name="DO1">
                                                                                                                    <block type="set_with_calculation" id="~aH1csV(1p#R;CrkEc2(">
                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="d0sDl:V|xEJ#gM52ctBy">
                                                                                                                                <field name="number">2</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <next>
                                                                                                                            <block type="set_with_calculation" id="o~HbFzR[{GMqxaYu@sl7">
                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="8gpxwvV{)vVv;x`p2-3P">
                                                                                                                                        <field name="number">2</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <value name="IF2">
                                                                                                                    <block type="logic_compare" id=";3m%i$~A$.I`]o.?o8f5">
                                                                                                                        <field name="OP">EQ</field>
                                                                                                                        <value name="A">
                                                                                                                            <block type="variables_get" id=",qc7irs*9)E9r*;8s^Mo">
                                                                                                                                <field name="VAR" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <value name="B">
                                                                                                                            <block type="play_number" id="E!N|hs^i+/{=931k:[4e">
                                                                                                                                <field name="number">3</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <statement name="DO2">
                                                                                                                    <block type="set_with_calculation" id="c|J!mlFw^ZXdLc(KNKY#">
                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="Jy1=9:k6qr/a!~66*]9H">
                                                                                                                                <field name="number">3</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <next>
                                                                                                                            <block type="set_with_calculation" id="#p/nhSll(zuc[/Zc~(8?">
                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="c^3}I6aX)ZXX}9)SGO4=">
                                                                                                                                        <field name="number">3</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <value name="IF3">
                                                                                                                    <block type="logic_compare" id="(2aqZ]Sou$(WGsj)$!ni">
                                                                                                                        <field name="OP">EQ</field>
                                                                                                                        <value name="A">
                                                                                                                            <block type="variables_get" id="sv)V0E.%0,l=R2}!HoN0">
                                                                                                                                <field name="VAR" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <value name="B">
                                                                                                                            <block type="play_number" id="7lWu(O:s($_}bg_{FBAN">
                                                                                                                                <field name="number">4</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <statement name="DO3">
                                                                                                                    <block type="set_with_calculation" id="p4Nt4[VD=G)r0wYsm|Je">
                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="~7!*(QpS*:1C?74.n1ZG">
                                                                                                                                <field name="number">4</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <next>
                                                                                                                            <block type="set_with_calculation" id=";`fbr#FZ$UcSf.TpPIFT">
                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="`1[M=jJzzrstU*ncZ$A6">
                                                                                                                                        <field name="number">4</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <value name="IF4">
                                                                                                                    <block type="logic_compare" id="|g.)#sH6px]K5RTzz@+[">
                                                                                                                        <field name="OP">EQ</field>
                                                                                                                        <value name="A">
                                                                                                                            <block type="variables_get" id="5fL5)xRy{R$=_EPF[MXD">
                                                                                                                                <field name="VAR" id="?Osp^Nb7DkM6+}jp=5v-">q9</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <value name="B">
                                                                                                                            <block type="play_number" id="6JI/:80S6Rttkei*zo`t">
                                                                                                                                <field name="number">5</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                    </block>
                                                                                                                </value>
                                                                                                                <statement name="DO4">
                                                                                                                    <block type="set_with_calculation" id="NGQa.Yu%$1Z0Yp-:U7J`">
                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                        <field name="NAME">+</field>
                                                                                                                        <value name="change">
                                                                                                                            <block type="play_number" id="R6/oQ:/#a):FU25qS::/">
                                                                                                                                <field name="number">5</field>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <next>
                                                                                                                            <block type="set_with_calculation" id="%GJs+IOPIPtn}W+tj!TG">
                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="=u-(!=dtF`BSo2iRfgtg">
                                                                                                                                        <field name="number">5</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </statement>
                                                                                                                <next>
                                                                                                                    <block type="controls_if" id=":Q-1CLTBqe~X#WIi.A5U" collapsed="true">
                                                                                                                        <mutation elseif="4"></mutation>
                                                                                                                        <value name="IF0">
                                                                                                                            <block type="logic_compare" id="Cf3%M!lVn#=}_;n2hM$0">
                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                <value name="A">
                                                                                                                                    <block type="variables_get" id="J:?sAthTSI+f}{vJ=^3I">
                                                                                                                                        <field name="VAR" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <value name="B">
                                                                                                                                    <block type="play_number" id="7`M^hd=B_{ib;h%~)OHD">
                                                                                                                                        <field name="number">1</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <statement name="DO0">
                                                                                                                            <block type="set_with_calculation" id="BC/FW[xVCuUd;?`W$=v+">
                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="|cT9ff5TN^X;hG|%Xh|z">
                                                                                                                                        <field name="number">1</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <next>
                                                                                                                                    <block type="set_with_calculation" id=";IyEBF@;Ur8:hCdQp;*=">
                                                                                                                                        <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id=",W(`5=]j=cX;:?,b#*:4">
                                                                                                                                                <field name="number">1</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                        <value name="IF1">
                                                                                                                            <block type="logic_compare" id="Q(y)*p|kOEfqJ?eds?x[">
                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                <value name="A">
                                                                                                                                    <block type="variables_get" id="{D#Z17YE/7;)=P)GQD{i">
                                                                                                                                        <field name="VAR" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <value name="B">
                                                                                                                                    <block type="play_number" id="_Ideb/ENShIZZ@H:+RKg">
                                                                                                                                        <field name="number">2</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <statement name="DO1">
                                                                                                                            <block type="set_with_calculation" id="^SqYCB[;+xs|/)d{Ibr~">
                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="Yj(3(E`mOz`~2N-Bu|N8">
                                                                                                                                        <field name="number">2</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <next>
                                                                                                                                    <block type="set_with_calculation" id="wdiJO!do;?v(4U8zx9mw">
                                                                                                                                        <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="Q_Xrh*O]18}}p;.t^XPx">
                                                                                                                                                <field name="number">2</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                        <value name="IF2">
                                                                                                                            <block type="logic_compare" id="}Tzw8J9348iR-~#Gm@w?">
                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                <value name="A">
                                                                                                                                    <block type="variables_get" id="@_0COBszV$1iX?x,=B=@">
                                                                                                                                        <field name="VAR" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <value name="B">
                                                                                                                                    <block type="play_number" id="IApFi6cDMr9t8.)K+ZRe">
                                                                                                                                        <field name="number">3</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <statement name="DO2">
                                                                                                                            <block type="set_with_calculation" id="|2Oa{}c7C%(-a#O:C=bW">
                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="^y!}r7:6va_(HmE;CfAF">
                                                                                                                                        <field name="number">3</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <next>
                                                                                                                                    <block type="set_with_calculation" id="aw`zTkhu/T?=B9q$uz%?">
                                                                                                                                        <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="0y^S[!ZT%cOm]c[(oJ-`">
                                                                                                                                                <field name="number">3</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                        <value name="IF3">
                                                                                                                            <block type="logic_compare" id="F;KeKnohVq#4X#N(E0qs">
                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                <value name="A">
                                                                                                                                    <block type="variables_get" id="tvQZeXJP?/(XDWi^#X8.">
                                                                                                                                        <field name="VAR" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <value name="B">
                                                                                                                                    <block type="play_number" id="%z%R0|EYP2cPunhD?B[0">
                                                                                                                                        <field name="number">4</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <statement name="DO3">
                                                                                                                            <block type="set_with_calculation" id="j|[MH8BQvu;S/9TIejX!">
                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="u|Mhbp_Q45o8CLl:P,3B">
                                                                                                                                        <field name="number">4</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <next>
                                                                                                                                    <block type="set_with_calculation" id="531~PIptxqZn@Q#z5ab0">
                                                                                                                                        <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="|[-,vCjo+B!{xsi(%)!c">
                                                                                                                                                <field name="number">4</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                        <value name="IF4">
                                                                                                                            <block type="logic_compare" id="o-Txgz.xJz|hF~mKsK+C">
                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                <value name="A">
                                                                                                                                    <block type="variables_get" id="3_$vQXckX{5%Tl-Y,W#w">
                                                                                                                                        <field name="VAR" id="+eyxEM8)NQLUes{laB.[">q10</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <value name="B">
                                                                                                                                    <block type="play_number" id="Y-nglaC@v?~Hx!P[RvAF">
                                                                                                                                        <field name="number">5</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                            </block>
                                                                                                                        </value>
                                                                                                                        <statement name="DO4">
                                                                                                                            <block type="set_with_calculation" id="yPMq}2(ufn`~{|xF*@EA">
                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                <field name="NAME">+</field>
                                                                                                                                <value name="change">
                                                                                                                                    <block type="play_number" id="^%PAxeFE~!30_+8zhM2Q">
                                                                                                                                        <field name="number">5</field>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <next>
                                                                                                                                    <block type="set_with_calculation" id="BP?kpYJ?k(`eg#~0Q+3;">
                                                                                                                                        <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="I3%ygpy9YD,Iw_o?R;Kl">
                                                                                                                                                <field name="number">5</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </statement>
                                                                                                                        <next>
                                                                                                                            <block type="controls_if" id="yp;)mNtT.fQg7[4P=ZaX" collapsed="true">
                                                                                                                                <mutation elseif="4"></mutation>
                                                                                                                                <value name="IF0">
                                                                                                                                    <block type="logic_compare" id="QS5n4^:yE_Dnh/pVE[X(">
                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                        <value name="A">
                                                                                                                                            <block type="variables_get" id="~tHcayU,ww,6O{DZ2=:f">
                                                                                                                                                <field name="VAR" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <value name="B">
                                                                                                                                            <block type="play_number" id="rXF,#*?a:xwBS6PP*Ia:">
                                                                                                                                                <field name="number">1</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <statement name="DO0">
                                                                                                                                    <block type="set_with_calculation" id="3,GQ]}a*|ER=xn6lrQKp">
                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id=":Hw:o+gTlE8,udZG9D/k">
                                                                                                                                                <field name="number">1</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <next>
                                                                                                                                            <block type="set_with_calculation" id="/gt2}YPw=WXrkpks~,fa">
                                                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="{c?K28wy@a;:;NS=MI5!">
                                                                                                                                                        <field name="number">1</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                                <value name="IF1">
                                                                                                                                    <block type="logic_compare" id="2%aGoC6ef,o`i6n{wSxN">
                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                        <value name="A">
                                                                                                                                            <block type="variables_get" id=".QWRbE%/}q!LrohPRT%x">
                                                                                                                                                <field name="VAR" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <value name="B">
                                                                                                                                            <block type="play_number" id=";Bm#E0y[@$_F)fi3akV=">
                                                                                                                                                <field name="number">2</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <statement name="DO1">
                                                                                                                                    <block type="set_with_calculation" id="[MBVXX;P+.dlYm{$vlP$">
                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="8ff~8+L)U,)-`RA[fR+W">
                                                                                                                                                <field name="number">2</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <next>
                                                                                                                                            <block type="set_with_calculation" id="qhqi+v=64B62MAkIG*Z2">
                                                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="n6^Z02h,N$1c0PWW]Ep2">
                                                                                                                                                        <field name="number">2</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                                <value name="IF2">
                                                                                                                                    <block type="logic_compare" id="lYGNR+Z3O9@B;{%zREj:">
                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                        <value name="A">
                                                                                                                                            <block type="variables_get" id=".pb=()D(k2-RSm~IiRY{">
                                                                                                                                                <field name="VAR" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <value name="B">
                                                                                                                                            <block type="play_number" id="_N%)7)!W!L)vnxH,q/Vo">
                                                                                                                                                <field name="number">3</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <statement name="DO2">
                                                                                                                                    <block type="set_with_calculation" id="GDzl74*/69M}8*^0(y87">
                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="v?B^:{F*LY7g:[zpvH_?">
                                                                                                                                                <field name="number">3</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <next>
                                                                                                                                            <block type="set_with_calculation" id="ui?wi|XU}41T?(*(HL9a">
                                                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="@ovH$0D9b4MSHM^a1k6K">
                                                                                                                                                        <field name="number">3</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                                <value name="IF3">
                                                                                                                                    <block type="logic_compare" id="]i$h?mK]aWr2os2u=LR4">
                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                        <value name="A">
                                                                                                                                            <block type="variables_get" id="$HEDY.bg-a7qyxTz%T(/">
                                                                                                                                                <field name="VAR" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <value name="B">
                                                                                                                                            <block type="play_number" id="Y1yWq9TOUqaI%K;Wo?7-">
                                                                                                                                                <field name="number">4</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <statement name="DO3">
                                                                                                                                    <block type="set_with_calculation" id="/#@T+o}sC%{coP-GY5z7">
                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="WRCu3aM[{+P2bw^W=w(0">
                                                                                                                                                <field name="number">4</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <next>
                                                                                                                                            <block type="set_with_calculation" id="FCv4$0`CqOClH=hg_dLm">
                                                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="Gy$(A}PwaC[mU_Yh^{{h">
                                                                                                                                                        <field name="number">4</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                                <value name="IF4">
                                                                                                                                    <block type="logic_compare" id=":m8]a_8}aFAi@I8~GMVF">
                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                        <value name="A">
                                                                                                                                            <block type="variables_get" id="dJuMF::CH_g!yS,j7+PO">
                                                                                                                                                <field name="VAR" id="ZPvEb,PhUvl6j!-;G6bX">q11</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <value name="B">
                                                                                                                                            <block type="play_number" id="idO_mGDk=FepP!7.+yV7">
                                                                                                                                                <field name="number">5</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                    </block>
                                                                                                                                </value>
                                                                                                                                <statement name="DO4">
                                                                                                                                    <block type="set_with_calculation" id="iZ7JxX_/nb$c}_2nj(?f">
                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                        <value name="change">
                                                                                                                                            <block type="play_number" id="ci=I:Tlh:5Xs$bG;I|P8">
                                                                                                                                                <field name="number">5</field>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <next>
                                                                                                                                            <block type="set_with_calculation" id="-*EU+S{RA-r*MV,;2.Uf">
                                                                                                                                                <field name="variable" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="iDB]9/`zrf4H{~x{dmpR">
                                                                                                                                                        <field name="number">5</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </statement>
                                                                                                                                <next>
                                                                                                                                    <block type="controls_if" id="0@*4@g{_}{B8LW*jfkEa" collapsed="true">
                                                                                                                                        <mutation elseif="4"></mutation>
                                                                                                                                        <value name="IF0">
                                                                                                                                            <block type="logic_compare" id="MH@](b%+u)/*S3~rRdPa">
                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                <value name="A">
                                                                                                                                                    <block type="variables_get" id="h$#U!~}9#R5N3hY2/TT!">
                                                                                                                                                        <field name="VAR" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <value name="B">
                                                                                                                                                    <block type="play_number" id="4(r6s!^Wy*~5%#4]N!V=">
                                                                                                                                                        <field name="number">1</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <statement name="DO0">
                                                                                                                                            <block type="set_with_calculation" id=".I;swbU:]QvwUfU38]ZS">
                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="v9jS2v,^tlJY;/W+dF0s">
                                                                                                                                                        <field name="number">1</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <next>
                                                                                                                                                    <block type="set_with_calculation" id="ujmjSL3)PL25.weDFcO1">
                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="uis=N8fgb69dFHWWe9zd">
                                                                                                                                                                <field name="number">1</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                        <value name="IF1">
                                                                                                                                            <block type="logic_compare" id="7$f}!anc#]7iyPmzFB93">
                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                <value name="A">
                                                                                                                                                    <block type="variables_get" id="oawCBCLH)=tR@IAZiW^q">
                                                                                                                                                        <field name="VAR" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <value name="B">
                                                                                                                                                    <block type="play_number" id="1UevKSyPLfXc^~v``B*,">
                                                                                                                                                        <field name="number">2</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <statement name="DO1">
                                                                                                                                            <block type="set_with_calculation" id="cAbSfQ!U.t8bC[]eaa_7">
                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="AK9e2?y(f+%=Na[6g:m4">
                                                                                                                                                        <field name="number">2</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <next>
                                                                                                                                                    <block type="set_with_calculation" id="Gypyw0eH,|4oU1vD1-un">
                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="P3]zKIlt5~]Xhj!$x+5r">
                                                                                                                                                                <field name="number">2</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                        <value name="IF2">
                                                                                                                                            <block type="logic_compare" id="~faMwz-]iQC3FG4D_.VV">
                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                <value name="A">
                                                                                                                                                    <block type="variables_get" id="N(B-F-;|bLA#16WlB7_v">
                                                                                                                                                        <field name="VAR" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <value name="B">
                                                                                                                                                    <block type="play_number" id="E~hc0o=LP|=~3dLlm8E8">
                                                                                                                                                        <field name="number">3</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <statement name="DO2">
                                                                                                                                            <block type="set_with_calculation" id="Wm_muESh`V[~L?yZnZo;">
                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="]biSUGUR?O^%7UE=qj@H">
                                                                                                                                                        <field name="number">3</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <next>
                                                                                                                                                    <block type="set_with_calculation" id="gYV0=M4$89Zf+Q^?Dz3Y">
                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="-[EcL0V+p1pgRfF02HP0">
                                                                                                                                                                <field name="number">3</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                        <value name="IF3">
                                                                                                                                            <block type="logic_compare" id="}UGBbiz4}iXx-z/l]L^x">
                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                <value name="A">
                                                                                                                                                    <block type="variables_get" id="8C/*]#6p{TvWa=X^#ZV:">
                                                                                                                                                        <field name="VAR" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <value name="B">
                                                                                                                                                    <block type="play_number" id="{IucFJd?@S^#~W/NT3|N">
                                                                                                                                                        <field name="number">4</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <statement name="DO3">
                                                                                                                                            <block type="set_with_calculation" id="2(Fazj[j_TS]07v}-bGR">
                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="4Q*;0DV@h[0OsQuX.A|I">
                                                                                                                                                        <field name="number">4</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <next>
                                                                                                                                                    <block type="set_with_calculation" id=")]MT=U:WW?qlUock/7DL">
                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="Zfbp[*nZXwf,_=:xFyGF">
                                                                                                                                                                <field name="number">4</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                        <value name="IF4">
                                                                                                                                            <block type="logic_compare" id="n9gSI~~U*LUe?{*Ql(O8">
                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                <value name="A">
                                                                                                                                                    <block type="variables_get" id="bB,ox0WjN3?@4o%)7;[D">
                                                                                                                                                        <field name="VAR" id="W0ft2Bk!mb+crt?wcm.9">q12</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <value name="B">
                                                                                                                                                    <block type="play_number" id="^,8fM^5jt-,Nhh]J$lnS">
                                                                                                                                                        <field name="number">5</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                            </block>
                                                                                                                                        </value>
                                                                                                                                        <statement name="DO4">
                                                                                                                                            <block type="set_with_calculation" id="eE5njQy09/CT`e]E#Prg">
                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                <value name="change">
                                                                                                                                                    <block type="play_number" id="-o1xa1^)iWK!|@itRP`b">
                                                                                                                                                        <field name="number">5</field>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <next>
                                                                                                                                                    <block type="set_with_calculation" id="55P(LRXa;1bX}emq1w_g">
                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="rIHFO%#BpAd/Aq^_bCM,">
                                                                                                                                                                <field name="number">5</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </statement>
                                                                                                                                        <next>
                                                                                                                                            <block type="controls_if" id="KLd=Y_5dbaLUUR:Em.4s" collapsed="true">
                                                                                                                                                <mutation elseif="4"></mutation>
                                                                                                                                                <value name="IF0">
                                                                                                                                                    <block type="logic_compare" id="nCDS;|i6cGoQ5.jfjO(]">
                                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                                        <value name="A">
                                                                                                                                                            <block type="variables_get" id="gD=egPxHP7~[+eNc/?i-">
                                                                                                                                                                <field name="VAR" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="B">
                                                                                                                                                            <block type="play_number" id="XHt)~0.j;5m1ZE#eHE~?">
                                                                                                                                                                <field name="number">1</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <statement name="DO0">
                                                                                                                                                    <block type="set_with_calculation" id="I]UlS3g)g!;w7X6s7~Gw">
                                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="m`S#m,0-`(CY;lh+eqz;">
                                                                                                                                                                <field name="number">1</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="set_with_calculation" id="^OTG$w39E$;l4rcf3*jA">
                                                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="e_WEW5hf?x4h)F#M~:yC">
                                                                                                                                                                        <field name="number">1</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="Om%+!0Oq7ZJWVMJ0t8K-">
                                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="1@Z)pNru)DLqO)vCa_4)">
                                                                                                                                                                                <field name="number">1</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                                <value name="IF1">
                                                                                                                                                    <block type="logic_compare" id="h:CbpFX`tY45*d)QPKH`">
                                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                                        <value name="A">
                                                                                                                                                            <block type="variables_get" id="[wmJvfVP47(2~{iA+{CQ">
                                                                                                                                                                <field name="VAR" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="B">
                                                                                                                                                            <block type="play_number" id="9!8BEZNL_N`Mg4uW,7EN">
                                                                                                                                                                <field name="number">2</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <statement name="DO1">
                                                                                                                                                    <block type="set_with_calculation" id="qP7zO[cn;~MtKCo%jEfM">
                                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="q{{;JdzM63SOtlh#BNg~">
                                                                                                                                                                <field name="number">2</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="set_with_calculation" id="^Ev8i.cd7UgP)Df/.!ui">
                                                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="x$J]B$+-AVOh7V{Uk:3+">
                                                                                                                                                                        <field name="number">2</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="i*:XXIX~}h^K4l^vXL%N">
                                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="6OUg;]c6#|0I(1KrET]B">
                                                                                                                                                                                <field name="number">2</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                                <value name="IF2">
                                                                                                                                                    <block type="logic_compare" id="sB-_!e|t9O;p+Wf7[=GE">
                                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                                        <value name="A">
                                                                                                                                                            <block type="variables_get" id="/T3dhV`0JAMA3APK*OcA">
                                                                                                                                                                <field name="VAR" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="B">
                                                                                                                                                            <block type="play_number" id=",0lkf_6r/62rXeJA~^-=">
                                                                                                                                                                <field name="number">3</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <statement name="DO2">
                                                                                                                                                    <block type="set_with_calculation" id="bn|+|Pb{eucJJiWNns#R">
                                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="+Jp_kLk6ntZ$JNX.k0XM">
                                                                                                                                                                <field name="number">3</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="set_with_calculation" id="NssZ@MT)/$1q@JfRtT?9">
                                                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="gzSoK{U}c?d}kw}w,r?O">
                                                                                                                                                                        <field name="number">3</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="l3D/d.1Ae:yB#[5:}QN|">
                                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="GJo7++^`5ZpYcCAe|$i$">
                                                                                                                                                                                <field name="number">3</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                                <value name="IF3">
                                                                                                                                                    <block type="logic_compare" id="8`;1t9ji{#:/c7Udrr!Z">
                                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                                        <value name="A">
                                                                                                                                                            <block type="variables_get" id="Lg;xdGx`cGS{)rgyMu,T">
                                                                                                                                                                <field name="VAR" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="B">
                                                                                                                                                            <block type="play_number" id="Nm-sA;8vZSjQHt!1Ga.k">
                                                                                                                                                                <field name="number">4</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <statement name="DO3">
                                                                                                                                                    <block type="set_with_calculation" id="fOwaqhv@L0.:NWd,TR4!">
                                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id="sZE7v.S[?n5azu_Q#WLh">
                                                                                                                                                                <field name="number">4</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="set_with_calculation" id="]NF`M*,.FOl=s,1_kE${">
                                                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="WNUr:b5_)sO|k~^RV%oJ">
                                                                                                                                                                        <field name="number">4</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="T(2UzGj83*=L)flu`Lh/">
                                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="g4Nr7%?#+XoW~oHV.*8g">
                                                                                                                                                                                <field name="number">4</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                                <value name="IF4">
                                                                                                                                                    <block type="logic_compare" id="(k*4w@Cl]N[k#9s.%3kP">
                                                                                                                                                        <field name="OP">EQ</field>
                                                                                                                                                        <value name="A">
                                                                                                                                                            <block type="variables_get" id="JUNzTU:JWOJnjkNJ]zt1">
                                                                                                                                                                <field name="VAR" id="KH2mSWlu(,TQ`csvj0cH">q13</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <value name="B">
                                                                                                                                                            <block type="play_number" id="U({j:A09}}][WchO]vYP">
                                                                                                                                                                <field name="number">5</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                    </block>
                                                                                                                                                </value>
                                                                                                                                                <statement name="DO4">
                                                                                                                                                    <block type="set_with_calculation" id="fdSW:wWG`x6g9K$AXU,J">
                                                                                                                                                        <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                        <value name="change">
                                                                                                                                                            <block type="play_number" id=",tNY=-#-Pi5s6XeJ(%P#">
                                                                                                                                                                <field name="number">5</field>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="set_with_calculation" id="gZnrFDK1$x~_)=pfWzH}">
                                                                                                                                                                <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="{2OqA7Bon5G8,zPX6os:">
                                                                                                                                                                        <field name="number">5</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="}eiN(^v1G3IlPmR0~D8B">
                                                                                                                                                                        <field name="variable" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="/Ya@l.N=?K^^K{AF7:t+">
                                                                                                                                                                                <field name="number">5</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </statement>
                                                                                                                                                <next>
                                                                                                                                                    <block type="controls_if" id="|Hi;]xH6BZ|LL06Z+D3]" collapsed="true">
                                                                                                                                                        <mutation elseif="4"></mutation>
                                                                                                                                                        <value name="IF0">
                                                                                                                                                            <block type="logic_compare" id="r+-fNv~(fL{X(WnTU#U~">
                                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                                <value name="A">
                                                                                                                                                                    <block type="variables_get" id="Si-0Zf3$3K(x$.Ia;^/I">
                                                                                                                                                                        <field name="VAR" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="B">
                                                                                                                                                                    <block type="play_number" id="?!i2esHFf@-JK7!Y5D#2">
                                                                                                                                                                        <field name="number">1</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <statement name="DO0">
                                                                                                                                                            <block type="set_with_calculation" id="C-WtDw2FzGjbPgW%wNfZ">
                                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="Mg.-s3}Mf_zFC~l0Ng,w">
                                                                                                                                                                        <field name="number">1</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="smJhrTjFFQ6av0U{BSY1">
                                                                                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="V~HY,_bh$54Fk-T,U;av">
                                                                                                                                                                                <field name="number">1</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </statement>
                                                                                                                                                        <value name="IF1">
                                                                                                                                                            <block type="logic_compare" id=",P:gW%X,YTJFtk~h?;|~">
                                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                                <value name="A">
                                                                                                                                                                    <block type="variables_get" id="mP2|h?n}Pd86*$-Z7Z~V">
                                                                                                                                                                        <field name="VAR" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="B">
                                                                                                                                                                    <block type="play_number" id="g`#T?bMYIMKw`=zbu=;5">
                                                                                                                                                                        <field name="number">2</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <statement name="DO1">
                                                                                                                                                            <block type="set_with_calculation" id="PDt*[%q-P,+Qd7+fW8.S">
                                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="5g_eVCf$foI/*~IhKd{b">
                                                                                                                                                                        <field name="number">2</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="=oz*Lk`:BohCX$!ge9YS">
                                                                                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="oyk;r}B[}#/}Pq`#m]1r">
                                                                                                                                                                                <field name="number">2</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </statement>
                                                                                                                                                        <value name="IF2">
                                                                                                                                                            <block type="logic_compare" id="Wp4rlzls]`%}]+(B~?=i">
                                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                                <value name="A">
                                                                                                                                                                    <block type="variables_get" id="El}G-rgrv/A[IA6(th4w">
                                                                                                                                                                        <field name="VAR" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="B">
                                                                                                                                                                    <block type="play_number" id="X^@(abcAL3;~uQuX_@ch">
                                                                                                                                                                        <field name="number">3</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <statement name="DO2">
                                                                                                                                                            <block type="set_with_calculation" id="0g_/{|(9UP}im0W-(t{j">
                                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="Z,(0xUKj@COI22|^O|1}">
                                                                                                                                                                        <field name="number">3</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="rLW.c_~{zZfu}V0M=Q`u">
                                                                                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="Pw:,gv4LDi^[*sx7CE_*">
                                                                                                                                                                                <field name="number">3</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </statement>
                                                                                                                                                        <value name="IF3">
                                                                                                                                                            <block type="logic_compare" id="DFGE.VCNJ%T4}FK#Ru@v">
                                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                                <value name="A">
                                                                                                                                                                    <block type="variables_get" id="yQcw8Hb8]Jg0-]6YT[U#">
                                                                                                                                                                        <field name="VAR" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="B">
                                                                                                                                                                    <block type="play_number" id="86C*5]p6K-/Z.S}FX}$z">
                                                                                                                                                                        <field name="number">4</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <statement name="DO3">
                                                                                                                                                            <block type="set_with_calculation" id="(sZsccH3u8(F]x[r?7jE">
                                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id=":Jt,!84YZL(R7FS1TY?v">
                                                                                                                                                                        <field name="number">4</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="XHkgo@XVTiK*B*;#I~=Y">
                                                                                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="-=vP_.Yt%`ezf_b]`2Vp">
                                                                                                                                                                                <field name="number">4</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </statement>
                                                                                                                                                        <value name="IF4">
                                                                                                                                                            <block type="logic_compare" id="O-1xOCMf,}wX0dEseU2b">
                                                                                                                                                                <field name="OP">EQ</field>
                                                                                                                                                                <value name="A">
                                                                                                                                                                    <block type="variables_get" id="U)sFOlk:bsw]UmXzmG${">
                                                                                                                                                                        <field name="VAR" id="Oa_jsE:WSW:Z`[t13T7z">q14</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="B">
                                                                                                                                                                    <block type="play_number" id="a/8oLGKI]:K$wwO2R_q6">
                                                                                                                                                                        <field name="number">5</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                            </block>
                                                                                                                                                        </value>
                                                                                                                                                        <statement name="DO4">
                                                                                                                                                            <block type="set_with_calculation" id="0aJWH7Exg_Lzj)[7Y]_w">
                                                                                                                                                                <field name="variable" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                                <field name="NAME">+</field>
                                                                                                                                                                <value name="change">
                                                                                                                                                                    <block type="play_number" id="=sjj6go+|+G*a}ZVA^J9">
                                                                                                                                                                        <field name="number">5</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="set_with_calculation" id="XQrHk)vTh3K~*BjY0dn;">
                                                                                                                                                                        <field name="variable" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                        <field name="NAME">+</field>
                                                                                                                                                                        <value name="change">
                                                                                                                                                                            <block type="play_number" id="|J{}2=YGyJu`BwDC_m`J">
                                                                                                                                                                                <field name="number">5</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </statement>
                                                                                                                                                        <next>
                                                                                                                                                            <block type="change_text" id="e:zWf0$0QINY!.fcB_%Y">
                                                                                                                                                                <value name="text">
                                                                                                                                                                    <block type="variables_get" id=":;pYWkWE=W:Y}/OkltrF">
                                                                                                                                                                        <field name="VAR" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <value name="element">
                                                                                                                                                                    <block type="element" id="QJO)yjju0:~ig#BXh]u?">
                                                                                                                                                                        <field name="element">bloc</field>
                                                                                                                                                                        <field name="NAME">totalscore</field>
                                                                                                                                                                    </block>
                                                                                                                                                                </value>
                                                                                                                                                                <next>
                                                                                                                                                                    <block type="change_text" id="A%ED#5TE.O3Nn3d3M9Rd">
                                                                                                                                                                        <value name="text">
                                                                                                                                                                            <block type="variables_get" id="`m.nOSv6H,8_2D9_%4VY">
                                                                                                                                                                                <field name="VAR" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                        <value name="element">
                                                                                                                                                                            <block type="element" id="C%)E,lXv=~f5:n%m|w[`">
                                                                                                                                                                                <field name="element">bloc</field>
                                                                                                                                                                                <field name="NAME">appreciation_tot</field>
                                                                                                                                                                            </block>
                                                                                                                                                                        </value>
                                                                                                                                                                        <next>
                                                                                                                                                                            <block type="change_text" id=":-Ep]:0;T0bBZo=kTZcS">
                                                                                                                                                                                <value name="text">
                                                                                                                                                                                    <block type="variables_get" id="n*x7+yl6V=,P-w:Q:Svv">
                                                                                                                                                                                        <field name="VAR" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                                                                                                                                                    </block>
                                                                                                                                                                                </value>
                                                                                                                                                                                <value name="element">
                                                                                                                                                                                    <block type="element" id="_6H|vR-(0r432.$whQVq">
                                                                                                                                                                                        <field name="element">bloc</field>
                                                                                                                                                                                        <field name="NAME">experience_tot</field>
                                                                                                                                                                                    </block>
                                                                                                                                                                                </value>
                                                                                                                                                                                <next>
                                                                                                                                                                                    <block type="change_text" id="S%I2=h4/0]@wa=Vgw{Hz">
                                                                                                                                                                                        <value name="text">
                                                                                                                                                                                            <block type="variables_get" id=":;c-|524]me5A.][!U*+">
                                                                                                                                                                                                <field name="VAR" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                                                                                                                                            </block>
                                                                                                                                                                                        </value>
                                                                                                                                                                                        <value name="element">
                                                                                                                                                                                            <block type="element" id="3XpYHGg.!{tj-0Gci{G`">
                                                                                                                                                                                                <field name="element">bloc</field>
                                                                                                                                                                                                <field name="NAME">behavior_tot</field>
                                                                                                                                                                                            </block>
                                                                                                                                                                                        </value>
                                                                                                                                                                                    </block>
                                                                                                                                                                                </next>
                                                                                                                                                                            </block>
                                                                                                                                                                        </next>
                                                                                                                                                                    </block>
                                                                                                                                                                </next>
                                                                                                                                                            </block>
                                                                                                                                                        </next>
                                                                                                                                                    </block>
                                                                                                                                                </next>
                                                                                                                                            </block>
                                                                                                                                        </next>
                                                                                                                                    </block>
                                                                                                                                </next>
                                                                                                                            </block>
                                                                                                                        </next>
                                                                                                                    </block>
                                                                                                                </next>
                                                                                                            </block>
                                                                                                        </next>
                                                                                                    </block>
                                                                                                </next>
                                                                                            </block>
                                                                                        </next>
                                                                                    </block>
                                                                                </next>
                                                                            </block>
                                                                        </next>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    <block type="procedures_defnoreturn" id="CDG{;6hBTu;wLTPB3|WT" x="2865" y="-255">
        <field name="NAME">calculate cumulative score</field>
        <comment pinned="false" h="80" w="160">Describe this function...</comment>
        <statement name="STACK">
            <block type="variables_set" id="eSBAJ1xAv?WYXBtJ9tsR">
                <field name="VAR" id="nFYZ,|zudP{A?Ec8;5zd">cumulative</field>
                <value name="VALUE">
                    <block type="math_arithmetic" id="8.aqKI@)Qa9NKtfg,$0#">
                        <field name="OP">DIVIDE</field>
                        <value name="A">
                            <shadow type="math_number" id="VkNXiZ[dcWO49r?2?ht:">
                                <field name="NUM">0</field>
                            </shadow>
                            <block type="variables_get" id="PG0JT}CvbY@9+Qxlx[;T">
                                <field name="VAR" id="$K{~cT!lRa+*BH3tMa~Y">totalscore</field>
                            </block>
                        </value>
                        <value name="B">
                            <shadow type="math_number" id="Ly_u=3g2{Ff`D^Infzxc">
                                <field name="NUM">16</field>
                            </shadow>
                        </value>
                    </block>
                </value>
                <next>
                    <block type="change_text" id="w#h+Nmio3podGM!Zm)T0">
                        <value name="text">
                            <block type="round_with_decimals" id=".:XinU7Y.An7nTS[:#X/">
                                <field name="round">round</field>
                                <field name="round to">100</field>
                                <value name="round">
                                    <block type="variables_get" id="pdIM2c[F+DdfW-l+tTK;">
                                        <field name="VAR" id="nFYZ,|zudP{A?Ec8;5zd">cumulative</field>
                                    </block>
                                </value>
                            </block>
                        </value>
                        <value name="element">
                            <block type="element" id="A/sn/T_aD6o{4n+vs$n.">
                                <field name="element">bloc</field>
                                <field name="NAME">cumulative</field>
                            </block>
                        </value>
                        <next>
                            <block type="variables_set" id="Lhm.Cs+hG@OgpTn(YL=z">
                                <field name="VAR" id="^A8HV0_TQxP?T0:PGuwS">appreciation</field>
                                <value name="VALUE">
                                    <block type="math_arithmetic" id="VKU6/gAO#0qZ8`v+E`|h">
                                        <field name="OP">DIVIDE</field>
                                        <value name="A">
                                            <shadow type="math_number">
                                                <field name="NUM">0</field>
                                            </shadow>
                                            <block type="variables_get" id="LZ{qx-!=S3xK!?Zj1ehb">
                                                <field name="VAR" id="Q}/jglu0buj6cy22vM/M">appreciation_tot</field>
                                            </block>
                                        </value>
                                        <value name="B">
                                            <shadow type="math_number" id="y~XuoTImo;,3~wo(omkt">
                                                <field name="NUM">8</field>
                                            </shadow>
                                        </value>
                                    </block>
                                </value>
                                <next>
                                    <block type="change_text" id="C|KTe#y~m-?.YNg,vyM/">
                                        <value name="text">
                                            <block type="round_with_decimals" id="}|dz`L8P({5Vc6K26*%n">
                                                <field name="round">round</field>
                                                <field name="round to">100</field>
                                                <value name="round">
                                                    <block type="variables_get" id="/9XgqocUCGnH|(U#vx1c">
                                                        <field name="VAR" id="^A8HV0_TQxP?T0:PGuwS">appreciation</field>
                                                    </block>
                                                </value>
                                            </block>
                                        </value>
                                        <value name="element">
                                            <block type="element" id="posFyEq)x8CP?pn8mzFd">
                                                <field name="element">bloc</field>
                                                <field name="NAME">appreciation</field>
                                            </block>
                                        </value>
                                        <next>
                                            <block type="variables_set" id="OLp{9%iP_}sn4gTf5lH$">
                                                <field name="VAR" id="$h2F4k:(|-H]p2u_Wfq=">experience</field>
                                                <value name="VALUE">
                                                    <block type="math_arithmetic" id="El}LaeCumt:.y}WZzo/l">
                                                        <field name="OP">DIVIDE</field>
                                                        <value name="A">
                                                            <shadow type="math_number">
                                                                <field name="NUM">0</field>
                                                            </shadow>
                                                            <block type="variables_get" id="0q28/xSkFyQ[,C}2h9_!">
                                                                <field name="VAR" id="zR9hzn6JvIft:*7DVWO,">experience_tot</field>
                                                            </block>
                                                        </value>
                                                        <value name="B">
                                                            <shadow type="math_number" id="6B=!Y$/OcqU?bu@AJmE3">
                                                                <field name="NUM">5</field>
                                                            </shadow>
                                                        </value>
                                                    </block>
                                                </value>
                                                <next>
                                                    <block type="change_text" id="*_gUl0_e}lU=xOsdqm^i">
                                                        <value name="text">
                                                            <block type="round_with_decimals" id="S[MP9dm5,-Xl11Ya/+(w">
                                                                <field name="round">round</field>
                                                                <field name="round to">100</field>
                                                                <value name="round">
                                                                    <block type="variables_get" id="M]%5csBzY9Bq2._5~K1K">
                                                                        <field name="VAR" id="$h2F4k:(|-H]p2u_Wfq=">experience</field>
                                                                    </block>
                                                                </value>
                                                            </block>
                                                        </value>
                                                        <value name="element">
                                                            <block type="element" id="0RDwW9E83IP08.*pY:U5">
                                                                <field name="element">bloc</field>
                                                                <field name="NAME">experience</field>
                                                            </block>
                                                        </value>
                                                        <next>
                                                            <block type="variables_set" id="/N5Buhbzbf?Ct?i;g,`-">
                                                                <field name="VAR" id="gmW_ug!Nr7m,@]F08kv=">behavior</field>
                                                                <value name="VALUE">
                                                                    <block type="math_arithmetic" id="+dlfVfJaFw7w(+?w4dXF">
                                                                        <field name="OP">DIVIDE</field>
                                                                        <value name="A">
                                                                            <shadow type="math_number">
                                                                                <field name="NUM">0</field>
                                                                            </shadow>
                                                                            <block type="variables_get" id="-@f2Eh`MP,%DqIETaW{~">
                                                                                <field name="VAR" id="fbc:Jief^,v_d?nLFE7=">behavior_tot</field>
                                                                            </block>
                                                                        </value>
                                                                        <value name="B">
                                                                            <shadow type="math_number" id="to:VC@4~W5bF=OEq[U2Y">
                                                                                <field name="NUM">4</field>
                                                                            </shadow>
                                                                        </value>
                                                                    </block>
                                                                </value>
                                                                <next>
                                                                    <block type="change_text" id="8$[|S{|5UIKHNbL%b42*">
                                                                        <value name="text">
                                                                            <block type="round_with_decimals" id="i)r;!_{0:X0/^MB%^w$N">
                                                                                <field name="round">round</field>
                                                                                <field name="round to">100</field>
                                                                                <value name="round">
                                                                                    <block type="variables_get" id="DC1fyX640d4QL[[P]HgW">
                                                                                        <field name="VAR" id="gmW_ug!Nr7m,@]F08kv=">behavior</field>
                                                                                    </block>
                                                                                </value>
                                                                            </block>
                                                                        </value>
                                                                        <value name="element">
                                                                            <block type="element" id="uYWF4KysACu1KevG1_B_">
                                                                                <field name="element">bloc</field>
                                                                                <field name="NAME">behavior</field>
                                                                            </block>
                                                                        </value>
                                                                    </block>
                                                                </next>
                                                            </block>
                                                        </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </next>
                                    </block>
                                </next>
                            </block>
                        </next>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    <block type="variables_set" id="F7z{r[30k,!X^4QW|2QO" disabled="true" x="1755" y="-135">
        <field name="VAR" id="VYgi?u5[{CA86!yp^P,d">progress-bar-var</field>
        <value name="VALUE">
            <block type="play_number" id="6`4j[NxK)CAfB`7W27QA">
                <field name="number">0</field>
            </block>
        </value>
    </block>
    <block type="procedures_defnoreturn" id="*51S%Tfhz{|0**08=u^R" disabled="true" x="1755" y="-45">
        <field name="NAME">progress bar change</field>
        <comment pinned="false" h="80" w="160">Describe this function...</comment>
        <statement name="STACK">
            <block type="set_with_calculation" id="k6#R07ISkus9W;YT;V7~">
                <field name="variable" id="VYgi?u5[{CA86!yp^P,d">progress-bar-var</field>
                <field name="NAME">+</field>
                <value name="change">
                    <block type="play_number" id="n+La3#:G]{x9Scs%U$4/">
                        <field name="number">6.25</field>
                    </block>
                </value>
                <next>
                    <block type="set_css" id="FR%#GT6Q(Yq!$%Uk?4vh">
                        <statement name="css">
                            <block type="css_property_set" id="de{:a4:_QW@Lf2FIkokD">
                                <field name="unit">%</field>
                                <value name="property">
                                    <shadow type="text" id="4T9Tf3/D^)g;Sf9`THzz">
                                        <field name="TEXT">width</field>
                                    </shadow>
                                </value>
                                <value name="value">
                                    <shadow type="text" id="m?Z?o71{ic.H44_X#VI(">
                                        <field name="TEXT">93.75</field>
                                    </shadow>
                                    <block type="variables_get" id="lZ-WCG{PxjR$y+JXhEc+">
                                        <field name="VAR" id="VYgi?u5[{CA86!yp^P,d">progress-bar-var</field>
                                    </block>
                                </value>
                            </block>
                        </statement>
                        <value name="to">
                            <block type="element" id="/u*Lgc|T5L,ZC1pgl?J#">
                                <field name="element">.</field>
                                <field name="NAME">progress-bar</field>
                            </block>
                        </value>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    <block type="mouse_event" id="+f)W0mZ@)pN+9936zGTM" x="1755" y="285">
        <field name="on">click</field>
        <value name="into">
            <block type="element" id="Z2uEt;coJ?P!/?g^V:jS">
                <field name="element">bloc</field>
                <field name="NAME">prev-question</field>
            </block>
        </value>
        <statement name="NAME">
            <block type="set_with_calculation" id="xF-MMn,j)U,rTDF~Yx/(">
                <field name="variable" id="VYgi?u5[{CA86!yp^P,d">progress-bar-var</field>
                <field name="NAME">-</field>
                <value name="change">
                    <block type="play_number" id="q(En)FQQVSlxv`lt!}S=">
                        <field name="number">6.25</field>
                    </block>
                </value>
                <next>
                    <block type="set_css" id="RaFpoLLr@Hbb29VD=z4p">
                        <statement name="css">
                            <block type="css_property_set" id="tYG35sPyHc=Eut0NI@P?">
                                <field name="unit">%</field>
                                <value name="property">
                                    <shadow type="text" id="oW/3XEe%eMV|Zr:G}s{D">
                                        <field name="TEXT">width</field>
                                    </shadow>
                                </value>
                                <value name="value">
                                    <shadow type="text">
                                        <field name="TEXT">93.75</field>
                                    </shadow>
                                    <block type="variables_get" id="vdTLcRj4qm-l/=l7XVcy">
                                        <field name="VAR" id="VYgi?u5[{CA86!yp^P,d">progress-bar-var</field>
                                    </block>
                                </value>
                            </block>
                        </statement>
                        <value name="to">
                            <block type="element" id="f9ko0|EYy;@dIJtx_Ut-">
                                <field name="element">.</field>
                                <field name="NAME">progress-bar</field>
                            </block>
                        </value>
                    </block>
                </next>
            </block>
        </statement>
    </block>
    <block type="mouse_event" id="X)a;3!iK~EFG,r0n*{`D" x="1755" y="6645">
        <field name="on">click</field>
        <value name="into">
            <block type="element" id="?8xQU!Or`K_[7b9d1j6p">
                <field name="element">bloc</field>
                <field name="NAME">prev-question</field>
            </block>
        </value>
        <statement name="NAME">
            <block type="change_text" id="@d5iW^+^u6B2#HWWq,rG">
                <value name="text">
                    <block type="text" id="6}i0MfzSjU=x/F@ZC)#0">
                        <field name="TEXT">Next</field>
                    </block>
                </value>
                <value name="element">
                    <block type="element" id="k@!Owevc`xS^[;,.9BoD">
                        <field name="element">#</field>
                        <field name="NAME">next-text</field>
                    </block>
                </value>
                <next>
                    <block type="set_css" id="f0`io,-k+Se%Tk.o`F3.">
                        <statement name="css">
                            <block type="css_property_set" id="/m15O]JgC*ECgbAY6hQT">
                                <field name="unit">%</field>
                                <value name="property">
                                    <shadow type="text" id="hSB)P$hexNg*msyoUhH=">
                                        <field name="TEXT">opacity</field>
                                    </shadow>
                                </value>
                                <value name="value">
                                    <shadow type="text" id="pJr,ry(adC:B,$MRjo_~">
                                        <field name="TEXT">0</field>
                                    </shadow>
                                </value>
                            </block>
                        </statement>
                        <value name="to">
                            <block type="element" id="#(]%04BmI;)fe7[?YVUE">
                                <field name="element">.</field>
                                <field name="NAME">progress-bar-gradient</field>
                            </block>
                        </value>
                    </block>
                </next>
            </block>
        </statement>
    </block>
</xml>
