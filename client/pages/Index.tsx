import React from 'react';

const Index = () => {
  // Segment 1: https:// to binary conversion (don't reveal the actual text)
  const httpsBinary = "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-12 shadow-2xl">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-wide mb-2">GOOGLE DEVELOPER GROUPS ON CAMPUS</h1>
              <h2 className="text-xl font-semibold text-blue-200">IET DAVV</h2>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-xl p-8 mb-6 shadow-xl">
              <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                TREASURE IN THE SHELL
              </h3>
              <p className="text-xl text-green-300 font-semibold mb-2">A Terminal Puzzle Challenge</p>
              <p className="text-blue-200">Crack the Clues • Break the Shell • Claim the Root</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <h4 className="text-2xl font-bold text-yellow-300 mb-2">LEVEL -1 DECODING CHALLENGE</h4>
              <p className="text-blue-200">Repository Link Reconstruction Protocol</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b-2 border-blue-500 pb-3">
              🎯 MISSION BRIEFING
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="mb-6 text-gray-700 leading-relaxed">
                  Your mission is to decode a repository link that has been fragmented into four distinct segments. 
                  Each segment requires a different decoding technique to reveal its contents.
                </p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold mb-3 text-blue-800">🔗 Target Structure Format:</h3>
                  <div className="font-mono text-lg bg-white p-3 rounded border">
                    <span className="text-green-600">segment1</span>{" "}
                    <span className="text-blue-600">segment2</span>{" "}
                    <span className="text-gray-500">/</span>{" "}
                    <span className="text-purple-600">segment3</span>{" "}
                    <span className="text-gray-500">/</span>{" "}
                    <span className="text-orange-600">segment4</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-lg border-l-4 border-green-500">
                  <span className="font-semibold text-green-800">Segment 1:</span>
                  <span className="text-green-700 ml-2">Binary Protocol</span>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
                  <span className="font-semibold text-blue-800">Segment 2:</span>
                  <span className="text-blue-700 ml-2">Set Theory Domain</span>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border-l-4 border-purple-500">
                  <span className="font-semibold text-purple-800">Segment 3:</span>
                  <span className="text-purple-700 ml-2">ASCII Identifier</span>
                </div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-4 rounded-lg border-l-4 border-orange-500">
                  <span className="font-semibold text-orange-800">Segment 4:</span>
                  <span className="text-orange-700 ml-2">System Selection</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 1 */}
        <section className="mb-12 print-together">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">1</span>
                SEGMENT 1: BINARY PROTOCOL DECODING
              </h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="font-bold mb-3 text-gray-800 flex items-center">
                  🔢 Encoded Binary Sequence:
                </h3>
                <code className="text-sm break-all bg-white p-3 rounded border block font-mono">
                  {httpsBinary}
                </code>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 text-gray-800">📋 Decoding Protocol:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Each 8-bit sequence represents one ASCII character</li>
                    <li>Convert binary to decimal value</li>
                    <li>Map decimal to corresponding ASCII character</li>
                    <li>Concatenate characters to form the protocol segment</li>
                  </ol>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold mb-2 text-blue-800">💡 Example Process:</h4>
                  <div className="text-sm space-y-1 font-mono">
                    <div><code className="bg-white px-2 py-1 rounded">01101000</code> → <code className="bg-white px-2 py-1 rounded">104</code> → <code className="bg-white px-2 py-1 rounded">h</code></div>
                  </div>
                  <p className="text-blue-700 text-sm mt-2">Apply this process to all 8 binary sequences</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 2 */}
        <section className="mb-12 print-together">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">2</span>
                SEGMENT 2: SET THEORY DOMAIN RESOLUTION
              </h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-bold mb-3 text-blue-800">🧮 Mathematical Set Operations</h3>
                <p className="text-blue-700 mb-4">
                  Each character is determined by finding the intersection (∩) of two sets. 
                  Extract characters by analyzing the common elements between set pairs.
                </p>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold mb-2">Example Pattern:</h4>
                  <p className="font-mono text-sm">Let A = {`{x | x is a letter in "engineer"}`}</p>
                  <p className="font-mono text-sm">Let B = {`{x | x is a letter in "genius"}`}</p>
                  <p className="font-mono text-sm text-blue-600">A ∩ B = {`{e, g, i, n}`} → Select appropriate character</p>
                </div>
              </div>

              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">Character Position 1:</h4>
                  <p className="font-mono text-sm">A = {`{x | x is a letter in "fight"}`}</p>
                  <p className="font-mono text-sm">B = {`{x | x is a letter in "page"}`}</p>
                  <p className="text-blue-600 text-sm">Find A ∩ B and select the first letter alphabetically</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">Character Position 2:</h4>
                  <p className="font-mono text-sm">C = {`{x | x is a letter in "hit"}`}</p>
                  <p className="font-mono text-sm">D = {`{x | x is a letter in "voice"}`}</p>
                  <p className="text-blue-600 text-sm">Find C ∩ D and select the first letter alphabetically</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">Character Position 3:</h4>
                  <p className="font-mono text-sm">E = {`{x | x is a letter in "trust"}`}</p>
                  <p className="font-mono text-sm">F = {`{x | x is a letter in "matte"}`}</p>
                  <p className="text-blue-600 text-sm">Find E ∩ F and select the first letter alphabetically</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">Character Position 4:</h4>
                  <p className="font-mono text-sm">G = {`{x | x is a letter in "light"}`}</p>
                  <p className="font-mono text-sm">H = {`{x | x is a letter in "phone"}`}</p>
                  <p className="text-blue-600 text-sm">Find G ∩ H and select the resulting letter</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">Character Position 5:</h4>
                  <p className="font-mono text-sm">I = {`{x | x is a letter in "music"}`}</p>
                  <p className="font-mono text-sm">J = {`{x | x is a letter in "run"}`}</p>
                  <p className="text-blue-600 text-sm">Find I ∩ J and select the first letter alphabetically</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h4 className="font-bold text-gray-800">Remaining Characters:</h4>
                  <p className="font-mono text-sm">K = {`{x | x is a symbol in "!@#$%^&*()_+-={}[]|\\:;\"'<>?,./"}`}</p>
                  <p className="font-mono text-sm">L = {`{x | x is a symbol in "./?<>[]{}()"}`}</p>
                  <p className="text-blue-600 text-sm">Find K ∩ L, then continue with remaining domain characters</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 3 */}
        <section className="mb-12 print-together">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">3</span>
                SEGMENT 3: ASCII IDENTIFIER CONVERSION
              </h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-bold mb-3 text-purple-800 flex items-center">
                  🔢 Encoded ASCII Sequence:
                </h3>
                <code className="text-sm bg-white p-3 rounded border block font-mono">
                  105 97 109 121 97 115 104 106 97 105 110 49
                </code>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-bold mb-3 text-gray-800">📋 Conversion Process:</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Each number represents an ASCII decimal value</li>
                    <li>Convert each value to its corresponding character</li>
                    <li>Arrange characters in sequence</li>
                    <li>Append trailing separator as needed</li>
                  </ol>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold mb-2 text-purple-800">💡 ASCII Reference:</h4>
                  <div className="text-sm space-y-1 font-mono">
                    <div>49 → <code className="bg-white px-2 py-1 rounded">1</code></div>
                    <div>97 → <code className="bg-white px-2 py-1 rounded">a</code></div>
                    <div>105 → <code className="bg-white px-2 py-1 rounded">i</code></div>
                    <div>115 → <code className="bg-white px-2 py-1 rounded">s</code></div>
                  </div>
                  <p className="text-purple-700 text-sm mt-2">Apply to all values in sequence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Segment 4 */}
        <section className="mb-12 print-together">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
              <h2 className="text-2xl font-bold flex items-center">
                <span className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-lg font-bold">4</span>
                SEGMENT 4: SYSTEM IDENTIFICATION PROTOCOL
              </h2>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="font-bold mb-3 text-orange-800">🖥️ Operating System Selection</h3>
                <p className="text-orange-700 mb-4">
                  Identify the correct operating system based on the provided characteristics. 
                  The chosen system name becomes the final segment.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800">Option A: CentOS</h4>
                  <p className="text-sm text-gray-600">Enterprise-focused distribution, now succeeded by Rocky Linux and AlmaLinux</p>
                </div>

                <div className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800">Option B: Debian</h4>
                  <p className="text-sm text-gray-600">Stable distribution known for .deb packages and extensive software repositories</p>
                </div>

                <div className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800">Option C: Windows</h4>
                  <p className="text-sm text-gray-600">Microsoft's proprietary operating system with graphical interface</p>
                </div>

                <div className="border border-green-300 p-4 rounded-lg bg-green-50 hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-green-800">Option D: Ubuntu</h4>
                  <p className="text-sm text-green-600">User-friendly Linux distribution with biannual releases, named after African philosophy meaning "humanity towards others"</p>
                  <div className="mt-2 text-xs text-green-700 font-medium">✓ Matches the given characteristics</div>
                </div>

                <div className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800">Option E: Unix</h4>
                  <p className="text-sm text-gray-600">Historic multi-user system developed at Bell Labs in the 1970s</p>
                </div>

                <div className="border border-gray-300 p-4 rounded-lg hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-gray-800">Option F: Fedora</h4>
                  <p className="text-sm text-gray-600">Community-driven distribution sponsored by Red Hat with cutting-edge features</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Instructions Summary */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">🏁 MISSION COMPLETION PROTOCOL</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-blue-300">📝 Assembly Instructions:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-300">
                  <li>Decode all four segments using their respective methods</li>
                  <li>Combine segments with appropriate separators</li>
                  <li>Verify the reconstructed link format</li>
                  <li>Proceed to access the target repository</li>
                </ol>
              </div>
              <div className="bg-black/20 p-4 rounded-lg border border-gray-600">
                <h3 className="text-lg font-semibold mb-3 text-green-300">🔗 Final Format Structure:</h3>
                <div className="font-mono text-sm bg-gray-700 p-3 rounded">
                  <span className="text-green-400">decoded_segment_1</span>
                  <span className="text-blue-400">decoded_segment_2</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-purple-400">decoded_segment_3</span>
                  <span className="text-gray-400">/</span>
                  <span className="text-orange-400">decoded_segment_4</span>
                </div>
                <p className="text-gray-400 text-xs mt-2">Replace with your decoded values</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white rounded-xl p-6 text-center shadow-lg">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <p className="font-bold">GDGOC IET DAVV</p>
              <p className="text-blue-200 text-sm">Treasure in the Shell Challenge</p>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-blue-200 text-sm">Level -1 Decoding Protocol</p>
              <p className="text-xs text-gray-300">Contact organizing committee for assistance</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
