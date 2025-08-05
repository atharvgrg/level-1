import React from 'react';

const Index = () => {
  // Segment 1: https:// to binary conversion
  const httpsText = "https://";
  const httpsBinary = Array.from(httpsText).map(char => 
    char.charCodeAt(0).toString(2).padStart(8, '0')
  ).join(' ');

  // Segment 4: Choose Ubuntu as the OS with hints
  const chosenOS = "Ubuntu";
  const osHint = "A popular Linux distribution known for its user-friendly interface, regular releases every 6 months, and its name meaning 'humanity towards others' in African philosophy.";

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <div className="border-b-2 border-black py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">GOOGLE DEVELOPER GROUPS ON CAMPUS</h1>
            <h2 className="text-xl font-bold mb-4">IET DAVV</h2>
            <div className="border-2 border-black p-4 mb-4">
              <h3 className="text-3xl font-bold mb-2">TREASURE IN THE SHELL</h3>
              <p className="text-lg font-semibold">A Terminal Puzzle Challenge</p>
              <p className="text-sm mt-2">Crack the Clues • Break the Shell • Claim the Root</p>
            </div>
            <h4 className="text-xl font-bold">LEVEL -1 OFFICIAL DOCUMENT</h4>
            <p className="text-sm mt-2">GitHub Repository Link Decoding Instructions</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        
        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2">OBJECTIVE</h2>
          <p className="mb-4">
            Candidates must decode a GitHub repository link that has been divided into four segments. 
            The final decoded URL should follow the format: <code className="bg-gray-100 px-2 py-1">https://github.com/username/repo_name</code>
          </p>
          <div className="bg-gray-50 p-4 border border-gray-300">
            <h3 className="font-bold mb-2">Link Structure:</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li>Segment 1: <code>https://</code></li>
              <li>Segment 2: <code>github.com/</code></li>
              <li>Segment 3: <code>username/</code></li>
              <li>Segment 4: <code>repo_name</code></li>
            </ol>
          </div>
        </section>

        {/* Segment 1 */}
        <section className="mb-8 print-together">
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2">SEGMENT 1: PROTOCOL DECODING</h2>
          <div className="bg-gray-50 p-4 border border-gray-300 mb-4">
            <h3 className="font-bold mb-2">Encoded Data (Binary):</h3>
            <code className="text-sm break-all">{httpsBinary}</code>
          </div>
          
          <h3 className="font-bold mb-2">Decoding Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>The encoded data above represents ASCII characters converted to binary</li>
            <li>Each group of 8 bits represents one ASCII character</li>
            <li>Convert each 8-bit binary number to its decimal equivalent</li>
            <li>Find the corresponding ASCII character for each decimal value</li>
            <li>Combine all characters to form the protocol segment</li>
          </ol>

          <div className="bg-blue-50 p-4 border border-blue-300">
            <h4 className="font-bold mb-2">Example Conversion:</h4>
            <p className="text-sm">
              <code>01101000</code> (binary) → <code>104</code> (decimal) → <code>h</code> (ASCII)
            </p>
            <p className="text-sm mt-1">
              <strong>Result:</strong> When fully decoded, this segment reveals: <code>https://</code>
            </p>
          </div>
        </section>

        {/* Segment 2 */}
        <section className="mb-8 print-together page-break">
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2">SEGMENT 2: SET THEORY OPERATIONS</h2>
          
          <h3 className="font-bold mb-2">Decoding Instructions:</h3>
          <p className="mb-4">
            Each character in "github.com/" is represented through set intersections. 
            Find the intersection of each pair of sets to determine the characters.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Character 1:</h4>
              <p>A = {`{f, g, h, i, j}`} ; B = {`{a, e, g, i, o, u}`}</p>
              <p><strong>A ∩ B = {`{g, i}`}</strong> → Take the first letter: <strong>g</strong></p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Character 2:</h4>
              <p>C = {`{h, i, t, u, v}`} ; D = {`{a, e, i, o, u}`}</p>
              <p><strong>C ∩ D = {`{i, u}`}</strong> → Take the first letter: <strong>i</strong></p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Character 3:</h4>
              <p>E = {`{r, s, t, u, v}`} ; F = {`{a, e, i, o, t, u}`}</p>
              <p><strong>E ∩ F = {`{t, u}`}</strong> → Take the first letter: <strong>t</strong></p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Character 4:</h4>
              <p>G = {`{h, i, j, k, l}`} ; H = {`{g, h, m, n, o}`}</p>
              <p><strong>G ∩ H = {`{h}`}</strong> → Take the letter: <strong>h</strong></p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Character 5:</h4>
              <p>I = {`{u, v, w, x, y}`} ; J = {`{s, t, u, v, w}`}</p>
              <p><strong>I ∩ J = {`{u, v, w}`}</strong> → Take the first letter: <strong>u</strong></p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Characters 6-8:</h4>
              <p>K = {`{a, b, c, d, e}`} ; L = {`{b, c, d, e, f}`}</p>
              <p><strong>K ∩ L = {`{b, c, d, e}`}</strong> → Spell: <strong>b</strong> for "."</p>
              <p>M = {`{c, o, m, n, p}`} ; N = {`{a, c, m, o, u}`}</p>
              <p><strong>M ∩ N = {`{c, m, o}`}</strong> → Form: <strong>com</strong></p>
            </div>

            <div className="bg-gray-50 p-4 border border-gray-300">
              <h4 className="font-bold">Character 9:</h4>
              <p>O = {`{/, \\, |, ~}`} ; P = {`{!, /, ?, @}`}</p>
              <p><strong>O ∩ P = {`{/}`}</strong> → Take the symbol: <strong>/</strong></p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 border border-blue-300 mt-4">
            <p><strong>Result:</strong> When combined, these characters form: <code>github.com/</code></p>
          </div>
        </section>

        {/* Segment 3 */}
        <section className="mb-8 print-together">
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2">SEGMENT 3: USERNAME ASCII CONVERSION</h2>
          
          <div className="bg-gray-50 p-4 border border-gray-300 mb-4">
            <h3 className="font-bold mb-2">Encoded Data (ASCII Values):</h3>
            <code className="text-sm">105 97 109 121 97 115 104 106 97 105 110 49</code>
          </div>

          <h3 className="font-bold mb-2">Decoding Instructions:</h3>
          <ol className="list-decimal list-inside space-y-2 mb-4">
            <li>Each number represents the ASCII value of a character</li>
            <li>Convert each ASCII value to its corresponding character</li>
            <li>Combine all characters to form the username</li>
          </ol>

          <div className="bg-blue-50 p-4 border border-blue-300">
            <h4 className="font-bold mb-2">ASCII Conversion Reference:</h4>
            <p className="text-sm mb-2">
              105→i, 97→a, 109→m, 121→y, 97→a, 115→s, 104→h, 106→j, 97→a, 105→i, 110→n, 49→1
            </p>
            <p><strong>Result:</strong> <code>iamyashjain1/</code></p>
          </div>
        </section>

        {/* Segment 4 */}
        <section className="mb-8 print-together page-break">
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2">SEGMENT 4: OPERATING SYSTEM IDENTIFICATION</h2>
          
          <h3 className="font-bold mb-2">Instructions:</h3>
          <p className="mb-4">
            Select the correct operating system based on the provided hint. The OS name will be the repository name.
          </p>

          <div className="space-y-4">
            <div className="border border-gray-300 p-4">
              <h4 className="font-bold">Option A: CentOS</h4>
              <p className="text-sm">Enterprise-focused Linux distribution, now discontinued in favor of Rocky Linux</p>
            </div>

            <div className="border border-gray-300 p-4">
              <h4 className="font-bold">Option B: Debian</h4>
              <p className="text-sm">Known for stability, uses .deb packages, mother of many distributions</p>
            </div>

            <div className="border border-gray-300 p-4">
              <h4 className="font-bold">Option C: Windows</h4>
              <p className="text-sm">Microsoft's proprietary operating system with graphical user interface</p>
            </div>

            <div className="border border-gray-300 p-4 bg-green-50">
              <h4 className="font-bold">Option D: {chosenOS}</h4>
              <p className="text-sm">{osHint}</p>
              <p className="text-sm mt-2 font-semibold">✓ CORRECT ANSWER</p>
            </div>

            <div className="border border-gray-300 p-4">
              <h4 className="font-bold">Option E: Unix</h4>
              <p className="text-sm">Multi-user, multitasking operating system developed in the 1970s at Bell Labs</p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 border border-blue-300 mt-4">
            <p><strong>Repository Name:</strong> <code>{chosenOS}</code></p>
          </div>
        </section>

        {/* Final Result */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 border-b border-black pb-2">FINAL DECODED URL</h2>
          <div className="bg-green-50 p-6 border-2 border-green-600 text-center">
            <h3 className="font-bold mb-2">Complete GitHub Repository Link:</h3>
            <code className="text-lg font-mono bg-white px-4 py-2 border rounded">
              https://github.com/iamyashjain1/{chosenOS}
            </code>
          </div>
        </section>

        {/* Footer */}
        <div className="border-t-2 border-black pt-6 mt-8 text-center">
          <p className="text-sm">
            <strong>GDGOC IET DAVV</strong> • Treasure in the Shell Challenge • Level -1 Document
          </p>
          <p className="text-xs text-gray-600 mt-2">
            For queries, contact the organizing committee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
