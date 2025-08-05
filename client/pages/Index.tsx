import React from "react";

const Index = () => {
  // Don't reveal any actual content - keep it mysterious
  const mysteriousBinary =
    "01101000 01110100 01110100 01110000 01110011 00111010 00101111 00101111";

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Dramatic Header */}
      <header className="print-header bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          {/* Logo Area */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center mb-6">
              <div className="relative">
                <div className="bg-green-400 text-black rounded-xl p-4 mr-4 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zM4 18V8h16v10H4zm2-8l4 4-4 4v-2l2-2-2-2V10z" />
                  </svg>
                </div>
                <div className="bg-yellow-400 text-black rounded-xl p-4 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 16L3 5h5.5l1 2h5L16 5h5l-2 11H5zm2.5-7h9l.9 5H6.6l.9-5zM12 13c-.8 0-1.5-.7-1.5-1.5S11.2 10 12 10s1.5.7 1.5 1.5S12.8 13 12 13z" />
                  </svg>
                </div>
              </div>
            </div>

            <h1 className="text-6xl font-black tracking-wider mb-4 bg-gradient-to-r from-green-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
              TREASURE IN THE SHELL
            </h1>
            <div className="flex items-center justify-center mb-4">
              <div className="h-1 w-16 bg-green-400"></div>
              <div className="h-2 w-2 bg-yellow-400 rounded-full mx-3"></div>
              <div className="h-1 w-16 bg-green-400"></div>
            </div>
            <p className="text-3xl font-bold text-blue-200 tracking-widest">
              A GDG EVENT
            </p>

            <div className="mt-8 bg-black/30 backdrop-blur-sm border border-green-400/30 rounded-2xl px-8 py-4 inline-block">
              <p className="text-green-300 font-mono text-xl tracking-wide">
                Crack the Clues • Break the Shell • Claim the Root
              </p>
            </div>
          </div>

          {/* Mission Badge */}
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center mb-3">
                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-lg mr-3">
                  LEVEL -1
                </span>
                <span className="text-yellow-300 font-bold text-2xl">
                  THE VAULT KEY CHALLENGE
                </span>
              </div>
              <p className="text-blue-200 text-lg">
                Digital Vault Location Decoder Protocol
              </p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-sm text-green-300 font-mono">
                  Google Developer Groups On Campus • IET DAVV
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Quest Area */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Quest Briefing */}
        <section className="print-section page-break-avoid mb-10">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="bg-indigo-500 text-white rounded-full p-3 mr-3">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-black text-gray-800">
                  MISSION BRIEFING
                </h2>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-indigo-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                    🎯 <span className="ml-2">Your Quest</span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    A <strong>digital vault</strong> location has been
                    fragmented into <strong>four encrypted segments</strong>.
                    Each segment is protected by a different cipher. Only by
                    mastering all four decryption techniques can you reconstruct
                    the <strong>complete access path</strong>.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-amber-800 mb-3 flex items-center">
                    🔐 <span className="ml-2">Target Path Structure</span>
                  </h3>
                  <div className="bg-white/80 p-4 rounded-lg border border-amber-200">
                    <div className="font-mono text-xl text-center space-x-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded font-bold">
                        KEY_1
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded font-bold">
                        KEY_2
                      </span>
                      <span className="text-gray-400 text-2xl">/</span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded font-bold">
                        KEY_3
                      </span>
                      <span className="text-gray-400 text-2xl">/</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded font-bold">
                        KEY_4
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  🗝️ <span className="ml-2">Cipher Challenges</span>
                </h3>

                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl p-4 transform hover:scale-105 transition-all shadow-lg">
                    <div className="flex items-center">
                      <span className="bg-white text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">
                        1
                      </span>
                      <div>
                        <h4 className="font-bold text-lg">Binary Cipher</h4>
                        <p className="text-green-100 text-sm">
                          Machine language decoder
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl p-4 transform hover:scale-105 transition-all shadow-lg">
                    <div className="flex items-center">
                      <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">
                        2
                      </span>
                      <div>
                        <h4 className="font-bold text-lg">Mathematical Sets</h4>
                        <p className="text-blue-100 text-sm">
                          Logic intersection puzzle
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl p-4 transform hover:scale-105 transition-all shadow-lg">
                    <div className="flex items-center">
                      <span className="bg-white text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">
                        3
                      </span>
                      <div>
                        <h4 className="font-bold text-lg">ASCII Vault</h4>
                        <p className="text-purple-100 text-sm">
                          Character code breaker
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-4 transform hover:scale-105 transition-all shadow-lg">
                    <div className="flex items-center">
                      <span className="bg-white text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mr-3">
                        4
                      </span>
                      <div>
                        <h4 className="font-bold text-lg">System Selector</h4>
                        <p className="text-orange-100 text-sm">
                          Platform identification
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge 1: Binary Cipher */}
        <section className="print-section page-break mb-10">
          <div className="bg-white border-2 border-green-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="print-segment-1 bg-gradient-to-r from-green-600 to-emerald-700 text-white p-6">
              <div className="flex items-center">
                <div className="bg-white text-green-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 font-black text-xl">
                  1
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    CHALLENGE 1: BINARY CIPHER
                  </h2>
                  <p className="text-green-100 text-lg">
                    Decode the machine language sequence
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      ⚡ <span className="ml-2">Encrypted Sequence</span>
                    </h3>
                    <div className="bg-black text-green-400 p-4 rounded-lg font-mono text-center">
                      <code className="text-lg break-all">
                        {mysteriousBinary}
                      </code>
                    </div>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center">
                      💡 <span className="ml-2">Decryption Hint</span>
                    </h4>
                    <div className="bg-white border border-green-300 rounded-lg p-4">
                      <p className="text-sm font-mono mb-2">
                        Sample:{" "}
                        <code className="bg-gray-100 px-2 py-1">01101000</code>
                      </p>
                      <p className="text-sm">
                        → Convert to decimal:{" "}
                        <code className="bg-gray-100 px-2 py-1">104</code>
                      </p>
                      <p className="text-sm">
                        → ASCII character:{" "}
                        <code className="bg-gray-100 px-2 py-1">'h'</code>
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    🎮 <span className="ml-2">Decryption Protocol</span>
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        1
                      </span>
                      <p className="text-gray-700">
                        Split the sequence into 8-bit binary blocks
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        2
                      </span>
                      <p className="text-gray-700">
                        Convert each binary block to decimal value
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        3
                      </span>
                      <p className="text-gray-700">
                        Translate decimal to ASCII character
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        4
                      </span>
                      <p className="text-gray-700">
                        Combine characters to reveal KEY_1
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge 2: Mathematical Sets */}
        <section className="print-section page-break mb-10">
          <div className="bg-white border-2 border-blue-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="print-segment-2 bg-gradient-to-r from-blue-600 to-cyan-700 text-white p-6">
              <div className="flex items-center">
                <div className="bg-white text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 font-black text-xl">
                  2
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    CHALLENGE 2: MATHEMATICAL SETS
                  </h2>
                  <p className="text-blue-100 text-lg">
                    Solve the intersection puzzle
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  🧮 <span className="ml-2">Logic Puzzle Instructions</span>
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-blue-800 mb-4">
                      Each character of KEY_2 is hidden within set
                      intersections. Find the common elements between paired
                      sets to unlock each position.
                    </p>
                    <div className="bg-white border border-blue-300 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        Example Pattern:
                      </h4>
                      <p className="font-mono text-sm">
                        A = {`{x | x ∈ "wizard"}`}
                      </p>
                      <p className="font-mono text-sm">
                        B = {`{x | x ∈ "magic"}`}
                      </p>
                      <p className="font-mono text-sm text-blue-600">
                        A ∩ B → Select appropriate character
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <h4 className="font-bold text-blue-800 mb-3">
                      🎯 Intersection Rules
                    </h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• Find common letters between word sets</li>
                      <li>• Apply selection criteria for each position</li>
                      <li>• Build the domain name character by character</li>
                      <li>• Include proper domain formatting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Position 1:
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p>A = {`{letters in "night"}`}</p>
                      <p>B = {`{letters in "page"}`}</p>
                      <p className="text-blue-600">
                        Find A ∩ B → first alphabetically
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Position 2:
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p>C = {`{letters in "voice"}`}</p>
                      <p>D = {`{letters in "choice"}`}</p>
                      <p className="text-blue-600">
                        Find C ∩ D → first alphabetically
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Position 3:
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p>E = {`{letters in "trust"}`}</p>
                      <p>F = {`{letters in "steel"}`}</p>
                      <p className="text-blue-600">
                        Find E ∩ F → first alphabetically
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Position 4:
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p>G = {`{letters in "shadow"}`}</p>
                      <p>H = {`{letters in "phone"}`}</p>
                      <p className="text-blue-600">
                        Find G ∩ H → resulting character
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Position 5:
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p>I = {`{letters in "quantum"}`}</p>
                      <p>J = {`{letters in "neutron"}`}</p>
                      <p className="text-blue-600">
                        Find I ∩ J → first alphabetically
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <h4 className="font-bold text-gray-800 mb-2">
                      Remaining Symbols:
                    </h4>
                    <div className="font-mono text-sm space-y-1">
                      <p>K = {`{symbols in "/.?#@$"}`}</p>
                      <p>L = {`{symbols in "./\\()[]"}`}</p>
                      <p className="text-blue-600">
                        Apply intersection for domain completion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge 3: ASCII Vault */}
        <section className="print-section page-break mb-10">
          <div className="bg-white border-2 border-purple-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="print-segment-3 bg-gradient-to-r from-purple-600 to-violet-700 text-white p-6">
              <div className="flex items-center">
                <div className="bg-white text-purple-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 font-black text-xl">
                  3
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    CHALLENGE 3: ASCII VAULT
                  </h2>
                  <p className="text-purple-100 text-lg">
                    Crack the character code sequence
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                    <h3 className="text-xl font-bold text-purple-800 mb-4 flex items-center">
                      🔢{" "}
                      <span className="ml-2">Encrypted Identity Sequence</span>
                    </h3>
                    <div className="bg-black text-purple-400 p-4 rounded-lg font-mono text-center">
                      <code className="text-lg">
                        105 97 109 121 97 115 104 106 97 105 110 49
                      </code>
                    </div>
                  </div>

                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                    <h4 className="font-bold text-purple-800 mb-3 flex items-center">
                      🗝️ <span className="ml-2">ASCII Reference</span>
                    </h4>
                    <div className="bg-white border border-purple-300 rounded-lg p-4">
                      <div className="grid grid-cols-2 gap-2 text-sm font-mono">
                        <div>97 → 'a'</div>
                        <div>105 → 'i'</div>
                        <div>49 → '1'</div>
                        <div>104 → 'h'</div>
                        <div>106 → 'j'</div>
                        <div>109 → 'm'</div>
                        <div>110 → 'n'</div>
                        <div>115 → 's'</div>
                        <div>121 → 'y'</div>
                        <div>...</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    🎯 <span className="ml-2">Decoding Mission</span>
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        1
                      </span>
                      <p className="text-gray-700">
                        Each number represents an ASCII decimal value
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        2
                      </span>
                      <p className="text-gray-700">
                        Convert each decimal to its character equivalent
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        3
                      </span>
                      <p className="text-gray-700">
                        Arrange characters in the given sequence
                      </p>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                        4
                      </span>
                      <p className="text-gray-700">
                        Add proper path separator to complete KEY_3
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 bg-gradient-to-br from-purple-100 to-violet-100 border border-purple-200 rounded-lg p-4">
                    <h5 className="font-bold text-purple-800 mb-2">
                      🎪 Identity Clue
                    </h5>
                    <p className="text-purple-700 text-sm">
                      The decoded sequence reveals a unique identifier - a
                      digital signature that belongs to someone involved in this
                      treasure hunt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge 4: System Selector */}
        <section className="print-section page-break mb-10">
          <div className="bg-white border-2 border-orange-300 rounded-2xl overflow-hidden shadow-xl">
            <div className="print-segment-4 bg-gradient-to-r from-orange-600 to-red-700 text-white p-6">
              <div className="flex items-center">
                <div className="bg-white text-orange-600 rounded-full w-12 h-12 flex items-center justify-center mr-4 font-black text-xl">
                  4
                </div>
                <div>
                  <h2 className="text-3xl font-bold">
                    CHALLENGE 4: SYSTEM SELECTOR
                  </h2>
                  <p className="text-orange-100 text-lg">
                    Identify the treasure vault platform
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  🏛️ <span className="ml-2">Digital Vault Selection</span>
                </h3>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div>
                    <p className="text-orange-800 mb-4">
                      The final key points to a{" "}
                      <strong>digital vault name</strong> that contains multiple
                      system environments. Each environment houses different
                      treasures, but only one contains the path to the next
                      level.
                    </p>
                    <div className="bg-white border border-orange-300 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">
                        Vault Structure:
                      </h4>
                      <p className="font-mono text-sm">treasure-vault/</p>
                      <p className="font-mono text-sm ml-4">
                        ├── ubuntu-chamber/
                      </p>
                      <p className="font-mono text-sm ml-4">
                        ├── centos-chamber/
                      </p>
                      <p className="font-mono text-sm ml-4">
                        ├── debian-chamber/
                      </p>
                      <p className="font-mono text-sm ml-4">
                        └── [other-chambers...]
                      </p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-orange-200">
                    <h4 className="font-bold text-orange-800 mb-3">
                      🎮 Selection Mission
                    </h4>
                    <p className="text-orange-700 text-sm mb-3">
                      Study the characteristics below and identify which system
                      matches the treasure hunt theme.
                    </p>
                    <div className="bg-orange-100 p-3 rounded">
                      <p className="text-orange-800 text-sm font-semibold">
                        🔍 Target Clue:
                      </p>
                      <p className="text-orange-700 text-sm">
                        "A system known for regular treasure releases every 6
                        months, with a name inspired by African philosophy about
                        unity and collaboration."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-800 mb-2">
                    🖥️ System Alpha
                  </h5>
                  <p className="text-sm text-gray-600">
                    Enterprise-focused platform, now archived in favor of newer
                    alternatives
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-800 mb-2">
                    🐧 System Beta
                  </h5>
                  <p className="text-sm text-gray-600">
                    Stability-focused platform, foundation for many derivatives,
                    uses .deb packages
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-800 mb-2">
                    🎯 System Gamma
                  </h5>
                  <p className="text-sm text-gray-600">
                    User-friendly platform with biannual releases, African
                    philosophy naming
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-800 mb-2">
                    🔴 System Delta
                  </h5>
                  <p className="text-sm text-gray-600">
                    Community-driven platform, cutting-edge features, sponsored
                    by major enterprise
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-800 mb-2">
                    ⚡ System Epsilon
                  </h5>
                  <p className="text-sm text-gray-600">
                    Rolling release platform, DIY philosophy, lightweight and
                    customizable
                  </p>
                </div>

                <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:shadow-md transition-all">
                  <h5 className="font-bold text-gray-800 mb-2">
                    🦎 System Zeta
                  </h5>
                  <p className="text-sm text-gray-600">
                    European-originated platform, enterprise variant available,
                    YaST configuration
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-orange-100 to-red-100 border border-orange-300 rounded-lg p-6">
                <h4 className="font-bold text-orange-800 mb-3 flex items-center">
                  🎪 <span className="ml-2">Final Vault Name</span>
                </h4>
                <p className="text-orange-700 mb-3">
                  Based on your system selection and the treasure hunt theme,
                  the vault is named:
                </p>
                <div className="bg-white border border-orange-400 rounded-lg p-4 text-center">
                  <code className="text-xl font-bold text-orange-800">
                    treasure-vault
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Assembly Mission */}
        <section className="print-section mb-10">
          <div className="bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="bg-yellow-400 text-black rounded-full p-4">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-4xl font-black mb-4">🏆 FINAL ASSEMBLY</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-400 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-yellow-300 flex items-center">
                  🎯 <span className="ml-2">Mission Complete Protocol</span>
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      1
                    </span>
                    <p className="text-gray-300">
                      Successfully decode all four cipher challenges
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      2
                    </span>
                    <p className="text-gray-300">
                      Assemble the keys with proper path separators
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      3
                    </span>
                    <p className="text-gray-300">
                      Verify the complete vault access path
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      4
                    </span>
                    <p className="text-gray-300">
                      Navigate to the digital vault location
                    </p>
                  </div>
                  <div className="flex items-start">
                    <span className="bg-yellow-400 text-black rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      5
                    </span>
                    <p className="text-gray-300">
                      Enter the correct system chamber for Level 0
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-black/30 border border-yellow-400/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-300 flex items-center">
                  🔐 <span className="ml-2">Assembled Path Format</span>
                </h3>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                  <div className="font-mono text-lg text-center space-y-2">
                    <div className="text-green-400">[DECODED_KEY_1]</div>
                    <div className="text-blue-400">[DECODED_KEY_2]</div>
                    <div className="text-gray-400">/</div>
                    <div className="text-purple-400">[DECODED_KEY_3]</div>
                    <div className="text-gray-400">/</div>
                    <div className="text-orange-400">treasure-vault</div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-400 text-sm">
                    Vault Name:{" "}
                    <span className="text-orange-300 font-bold">
                      treasure-vault
                    </span>
                  </p>
                  <p className="text-yellow-300 text-sm font-semibold mt-2">
                    🎉 Success unlocks the next challenge level!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Epic Footer */}
      <footer className="print-header bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h3 className="text-xl font-bold text-yellow-300">
                Google Developer Groups On Campus
              </h3>
              <p className="text-blue-200">
                IET DAVV • Treasure in the Shell Challenge
              </p>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-green-300 font-bold text-lg">
                Level -1 Protocol
              </p>
              <p className="text-gray-300 text-sm">
                Need assistance? Contact the treasure hunt masters
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
