import React from 'react';

const Index = () => {
  // Segment 1: Binary data (don't reveal the actual text)
  const httpsBinary = "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111";

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Professional Header with Logo */}
      <header className="print-header bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-6 page-break-avoid">
        <div className="max-w-5xl mx-auto px-6">
          {/* Logo Design */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              {/* Terminal Icon */}
              <div className="bg-green-400 text-black rounded-lg p-3 mr-4 shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM4 18V8h16v10H4zm2-8l4 4-4 4v-2l2-2-2-2V10z"/>
                </svg>
              </div>
              {/* Treasure Icon */}
              <div className="bg-yellow-400 text-black rounded-lg p-3 shadow-lg">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M5 16L3 5h5.5l1 2h5L16 5h5l-2 11H5zm2.5-7h9l.9 5H6.6l.9-5zM12 13c-.8 0-1.5-.7-1.5-1.5S11.2 10 12 10s1.5.7 1.5 1.5S12.8 13 12 13z"/>
                </svg>
              </div>
            </div>
            
            {/* Event Title */}
            <h1 className="text-5xl font-bold tracking-wider mb-2 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              TREASURE IN THE SHELL
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-3"></div>
            <p className="text-2xl font-semibold text-blue-200 tracking-wide">A GDG EVENT</p>
            
            {/* Subtitle */}
            <div className="mt-6 bg-black/20 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3 inline-block">
              <p className="text-green-300 font-mono text-lg">Crack the Clues • Break the Shell • Claim the Root</p>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-3xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-yellow-300 mb-3">LEVEL -1 DECODING CHALLENGE</h2>
              <p className="text-blue-200 text-lg">Repository Link Reconstruction Protocol</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-blue-300">Google Developer Groups On Campus • IET DAVV</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">
        
        {/* Mission Overview */}
        <section className="print-section page-break-avoid mb-12">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">🎯 MISSION BRIEFING</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Your objective is to decode a repository link fragmented into four distinct segments. 
                  Each segment employs a different cryptographic technique requiring specific decoding methods.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h3 className="font-bold text-blue-800 mb-2">🔗 Target Format:</h3>
                  <div className="font-mono text-lg bg-white p-3 rounded border border-blue-200">
                    <span className="text-green-600 font-semibold">segment1</span>{" "}
                    <span className="text-blue-600 font-semibold">segment2</span>{" "}
                    <span className="text-gray-500">/</span>{" "}
                    <span className="text-purple-600 font-semibold">segment3</span>{" "}
                    <span className="text-gray-500">/</span>{" "}
                    <span className="text-orange-600 font-semibold">segment4</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">1</span>
                    <div>
                      <span className="font-semibold text-green-800">Binary Protocol</span>
                      <p className="text-green-600 text-sm">ASCII to Binary conversion</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">2</span>
                    <div>
                      <span className="font-semibold text-blue-800">Set Theory Domain</span>
                      <p className="text-blue-600 text-sm">Mathematical set operations</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">3</span>
                    <div>
                      <span className="font-semibold text-purple-800">ASCII Identifier</span>
                      <p className="text-purple-600 text-sm">Decimal to character mapping</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">4</span>
                    <div>
                      <span className="font-semibold text-orange-800">Repository Selection</span>
                      <p className="text-orange-600 text-sm">System-based identification</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 1 */}
        <section className="print-section page-break mb-12">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="print-segment-header print-segment-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-green-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">1</span>
                SEGMENT 1: BINARY PROTOCOL DECODING
              </h2>
            </div>
            
            <div className="p-8 page-break-avoid">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  🔢 Encoded Binary Sequence
                </h3>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <code className="text-sm font-mono break-all block">
                    {httpsBinary}
                  </code>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📋 Decoding Steps:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Separate the binary sequence into 8-bit groups</li>
                    <li>Convert each 8-bit binary to decimal</li>
                    <li>Map decimal values to ASCII characters</li>
                    <li>Concatenate characters in sequence</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-800 mb-2">💡 Example:</h4>
                  <div className="text-sm font-mono space-y-1">
                    <div><code className="bg-white px-2 py-1 border rounded">01101000</code> → 104 → 'h'</div>
                    <div><code className="bg-white px-2 py-1 border rounded">01110100</code> → 116 → 't'</div>
                  </div>
                  <p className="text-blue-700 text-sm mt-2">Continue for all 8-bit groups</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 2 */}
        <section className="print-section page-break mb-12">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="print-segment-header print-segment-2 bg-gradient-to-r from-blue-600 to-cyan-700 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">2</span>
                SEGMENT 2: SET THEORY DOMAIN RESOLUTION
              </h2>
            </div>
            
            <div className="p-8 page-break-avoid">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🧮 Mathematical Set Operations</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-blue-800 mb-3">
                    Decode characters using set intersection operations. Each character is determined by finding A ∩ B.
                  </p>
                  <div className="bg-white border border-blue-300 rounded p-3">
                    <p className="font-semibold text-sm mb-1">Pattern Example:</p>
                    <p className="font-mono text-sm">A = {`{x | x is a letter in "example"}`}</p>
                    <p className="font-mono text-sm">B = {`{x | x is a letter in "sample"}`}</p>
                    <p className="font-mono text-sm text-blue-600">A ∩ B = {`{a, e, l, m, p}`} → Select specific character</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Position 1:</h4>
                  <div className="font-mono text-sm space-y-1">
                    <p>A = {`{x | x is a letter in "knight"}`}</p>
                    <p>B = {`{x | x is a letter in "page"}`}</p>
                    <p className="text-blue-600">Find A ∩ B, select first alphabetically</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Position 2:</h4>
                  <div className="font-mono text-sm space-y-1">
                    <p>C = {`{x | x is a letter in "machine"}`}</p>
                    <p>D = {`{x | x is a letter in "office"}`}</p>
                    <p className="text-blue-600">Find C ∩ D, select first alphabetically</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Position 3:</h4>
                  <div className="font-mono text-sm space-y-1">
                    <p>E = {`{x | x is a letter in "street"}`}</p>
                    <p>F = {`{x | x is a letter in "byte"}`}</p>
                    <p className="text-blue-600">Find E ∩ F, select first alphabetically</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Position 4:</h4>
                  <div className="font-mono text-sm space-y-1">
                    <p>G = {`{x | x is a letter in "graph"}`}</p>
                    <p>H = {`{x | x is a letter in "phone"}`}</p>
                    <p className="text-blue-600">Find G ∩ H, select resulting character</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Position 5:</h4>
                  <div className="font-mono text-sm space-y-1">
                    <p>I = {`{x | x is a letter in "unique"}`}</p>
                    <p>J = {`{x | x is a letter in "autumn"}`}</p>
                    <p className="text-blue-600">Find I ∩ J, select first alphabetically</p>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Remaining Characters:</h4>
                  <div className="font-mono text-sm space-y-1">
                    <p>K = {`{x | x is a symbol in ".,;:!?/@#$%^&*()_+-="}`}</p>
                    <p>L = {`{x | x is a symbol in "./\\[]{}()<>?:"}`}</p>
                    <p className="text-blue-600">Apply intersection method for domain completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 3 */}
        <section className="print-section page-break mb-12">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="print-segment-header print-segment-3 bg-gradient-to-r from-purple-600 to-violet-700 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">3</span>
                SEGMENT 3: ASCII IDENTIFIER CONVERSION
              </h2>
            </div>
            
            <div className="p-8 page-break-avoid">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🔢 Encoded ASCII Sequence</h3>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <code className="text-sm font-mono break-all block">
                    105 97 109 121 97 115 104 106 97 105 110 49
                  </code>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-800 mb-3">📋 Conversion Process:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Each number represents ASCII decimal value</li>
                    <li>Convert decimal to corresponding character</li>
                    <li>Arrange characters in given sequence</li>
                    <li>Append path separator at the end</li>
                  </ol>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-bold text-purple-800 mb-2">💡 Reference Table:</h4>
                  <div className="text-sm font-mono space-y-1">
                    <div>97 → 'a' | 105 → 'i' | 110 → 'n'</div>
                    <div>49 → '1' | 104 → 'h' | 115 → 's'</div>
                    <div>106 → 'j' | 109 → 'm' | 121 → 'y'</div>
                  </div>
                  <p className="text-purple-700 text-sm mt-2">Apply to sequence in order</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 4 */}
        <section className="print-section page-break mb-12">
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="print-segment-header print-segment-4 bg-gradient-to-r from-orange-600 to-red-700 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-orange-600 rounded-full w-10 h-10 flex items-center justify-center mr-4 text-lg font-bold">4</span>
                SEGMENT 4: REPOSITORY IDENTIFICATION
              </h2>
            </div>
            
            <div className="p-8 page-break-avoid">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">🗂️ Repository Selection Protocol</h3>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <p className="text-orange-800 mb-3">
                    Identify the correct repository name based on system characteristics. The repository contains 
                    folders for different operating systems, with the target system containing the next level documentation.
                  </p>
                  <div className="bg-white border border-orange-300 rounded p-3">
                    <p className="font-semibold text-sm mb-1">Repository Structure:</p>
                    <p className="font-mono text-sm">shell-quest/</p>
                    <p className="font-mono text-sm ml-4">├── Ubuntu/</p>
                    <p className="font-mono text-sm ml-4">├── CentOS/</p>
                    <p className="font-mono text-sm ml-4">├── Debian/</p>
                    <p className="font-mono text-sm ml-4">└── [other systems...]</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-gray-800 mb-3">🖥️ System Identification Clues:</h4>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-gray-800">System A: CentOS</h5>
                    <p className="text-sm text-gray-600">Enterprise Linux distribution, discontinued, succeeded by Rocky/Alma</p>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-gray-800">System B: Debian</h5>
                    <p className="text-sm text-gray-600">Stable distribution, .deb packages, foundation for many derivatives</p>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-gray-800">System C: Ubuntu</h5>
                    <p className="text-sm text-gray-600">User-friendly distribution, biannual releases, African philosophy meaning</p>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-gray-800">System D: Fedora</h5>
                    <p className="text-sm text-gray-600">Community distribution, Red Hat sponsored, cutting-edge features</p>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-gray-800">System E: Arch</h5>
                    <p className="text-sm text-gray-600">Rolling release, DIY philosophy, lightweight and customizable</p>
                  </div>

                  <div className="border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h5 className="font-bold text-gray-800">System F: openSUSE</h5>
                    <p className="text-sm text-gray-600">German-originated, YaST configuration tool, enterprise variant available</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <h4 className="font-bold text-blue-800 mb-2">🎯 Target Identification:</h4>
                  <p className="text-blue-700 text-sm">
                    Based on the provided characteristics, identify which system matches the description:
                    "A popular Linux distribution known for its user-friendly interface, regular releases every 6 months, 
                    and its name meaning 'humanity towards others' in African philosophy."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Instructions */}
        <section className="print-section mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold">🏁 ASSEMBLY PROTOCOL</h2>
              <div className="w-20 h-1 bg-green-400 mx-auto mt-3"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-300">📝 Reconstruction Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Complete decoding of all four segments</li>
                  <li>Combine segments with appropriate separators</li>
                  <li>Verify format matches target structure</li>
                  <li>Navigate to the repository location</li>
                  <li>Access the correct system folder for next level</li>
                </ol>
              </div>
              <div className="bg-black/30 border border-gray-600 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-yellow-300">🔗 Final Format:</h3>
                <div className="font-mono text-sm bg-gray-800 p-3 rounded border">
                  <span className="text-green-400">[decoded_segment_1]</span>
                  <span className="text-blue-400">[decoded_segment_2]</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-purple-400">[decoded_segment_3]</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-orange-400">shell-quest</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">Repository name: <span className="text-orange-300">shell-quest</span></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="print-header bg-gradient-to-r from-slate-900 to-blue-900 text-white py-6 mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="font-bold text-lg">Google Developer Groups On Campus</p>
              <p className="text-blue-200">IET DAVV • Treasure in the Shell Challenge</p>
            </div>
            <div className="text-center md:text-right mt-4 md:mt-0">
              <p className="text-green-300 font-semibold">Level -1 Protocol</p>
              <p className="text-xs text-gray-300">Contact organizing committee for assistance</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
