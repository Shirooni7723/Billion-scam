// Complete Evidence Data with Full Proofs
const evidenceData = {
    summary: {
        totalUsers: 27,
        confirmedBuyers: 27,
        avgSuspicion: 100,
        usersUnder100Messages: 6
    },
    
    // Detailed case studies with full proof
    caseStudies: [
        {
            twitter: "mdshefat217",
            discord: "mdshefat217",
            suspicion: 100,
            messages: 24,
            daysInServer: 240,
            substantialMessages: 2,
            tweetShares: 11,
            redFlags: [
                "CRITICAL: Only 24 messages but has SOG role (requires weeks of activity)",
                "Only 8.3% substantial messages (5+ words)",
                "In server 240 days but only 24 messages"
            ],
            channelBreakdown: {
                "share_content": 11,
                "gm_checking": 1,
                "general": 11,
                "memes_art": 1
            },
            sampleMessages: [
                { content: "NG", channel: "general", wordCount: 1 },
                { content: "Gm billions", channel: "gm_checking", wordCount: 2 },
                { content: "He wassup", channel: "general", wordCount: 2 },
                { content: "What do you thinking", channel: "general", wordCount: 4 }
            ],
            tweets: [
                { url: "https://twitter.com/i/status/2012952191611568556", description: "Gn @billions_ntwk family. The ticker is $Bill" },
                { url: "https://twitter.com/i/status/2010755146142408870", description: "My feelings about Mr.Javi - Mr. Javi is a person I really respect. He is always active 24/7..." }
            ],
            avgMessageLength: 2.2,
            joinDate: "2025-05-23"
        },
        {
            twitter: "AbubakarLawali_",
            discord: "abubakarlawaliwasagu",
            suspicion: 100,
            messages: 49,
            daysInServer: 299,
            substantialMessages: 6,
            tweetShares: 3,
            redFlags: [
                "CRITICAL: Only 49 messages but has SOG role (requires weeks of activity)",
                "Only 12.2% substantial messages (5+ words)",
                "In server 299 days but only 49 messages"
            ],
            channelBreakdown: {
                "gm_checking": 19,
                "general": 25,
                "memes_art": 2,
                "share_content": 3
            },
            sampleMessages: [
                { content: "Gm billions", channel: "gm_checking", wordCount: 2 },
                { content: "Gm billions", channel: "gm_checking", wordCount: 2 },
                { content: "gbillions", channel: "gm_checking", wordCount: 1 },
                { content: "Hello billionaires", channel: "general", wordCount: 2 }
            ],
            tweets: [
                { url: "https://twitter.com/AbubakarLawali_/status/1997538613119332782", description: "GM CT - gbillions gbillions if you say it back" },
                { url: "https://twitter.com/AbubakarLawali_/status/1996123665075720268", description: "GM CT - Gbillions Gbillions if you say it back - $BILL UP" }
            ],
            avgMessageLength: 2.6,
            joinDate: "2025-03-25"
        },
        {
            twitter: "rigankudi",
            discord: "rigankudi",
            suspicion: 100,
            messages: 93,
            daysInServer: 150,
            substantialMessages: 8,
            tweetShares: 25,
            redFlags: [
                "CRITICAL: Only 93 messages but has SOG role",
                "High percentage of tweet shares vs actual engagement"
            ],
            channelBreakdown: {
                "share_content": 25,
                "general": 45,
                "gm_checking": 20,
                "memes_art": 3
            },
            sampleMessages: [
                { content: "gm", channel: "gm_checking", wordCount: 1 },
                { content: "hello", channel: "general", wordCount: 1 }
            ],
            tweets: [],
            avgMessageLength: 3.1,
            joinDate: "2025-08-22"
        },
        {
            twitter: "EbenezerShonowo",
            discord: "eben49_43060",
            suspicion: 100,
            messages: 99,
            daysInServer: 180,
            substantialMessages: 12,
            tweetShares: 30,
            redFlags: [
                "Only 99 messages but has SOG role - just under the threshold"
            ],
            channelBreakdown: {
                "share_content": 30,
                "general": 50,
                "gm_checking": 15,
                "memes_art": 4
            },
            sampleMessages: [],
            tweets: [],
            avgMessageLength: 2.8,
            joinDate: "2025-07-23"
        }
    ],
    
    // Full list of all users
    allUsers: [
        { rank: 1, twitter: "AbubakarLawali_", discord: "abubakarlawaliwasagu", messages: 49, hasSog: true, suspicion: 100, redFlags: 3, daysInServer: 299 },
        { rank: 2, twitter: "mdshefat217", discord: "mdshefat217", messages: 24, hasSog: true, suspicion: 100, redFlags: 3, daysInServer: 240 },
        { rank: 3, twitter: "rigankudi", discord: "rigankudi", messages: 93, hasSog: true, suspicion: 100, redFlags: 2, daysInServer: 150 },
        { rank: 4, twitter: "EbenezerShonowo", discord: "eben49_43060", messages: 99, hasSog: true, suspicion: 100, redFlags: 1, daysInServer: 180 },
        { rank: 5, twitter: "ib1_uzairu", discord: "yresearcher", messages: 92, hasSog: true, suspicion: 100, redFlags: 1, daysInServer: 120 },
        { rank: 6, twitter: "__Ahmad__Arif__", discord: "ahmad_39523", messages: 500, hasSog: true, suspicion: 100, redFlags: 1, daysInServer: 90 },
        { rank: 7, twitter: "00adewale", discord: "0xadewale", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 71 },
        { rank: 8, twitter: "0xalamm", discord: "alamr7", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 85 },
        { rank: 9, twitter: "Ade_Ola221", discord: "cypherlon", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 95 },
        { rank: 10, twitter: "ARPAANNN", discord: "iamswatiiiii", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 100 },
        { rank: 11, twitter: "AsifOfficial00", discord: "iasifmahmud", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 88 },
        { rank: 12, twitter: "CryptoWithCK", discord: "chetan78i", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 75 },
        { rank: 13, twitter: "dotmantissa", discord: "allergyyyishere", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 82 },
        { rank: 14, twitter: "Favblakboy", discord: "praizoski", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 90 },
        { rank: 15, twitter: "HsShamsudeen19", discord: "hshamsudeen", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 78 },
        { rank: 16, twitter: "imasterathan", discord: "imasterathan", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 92 },
        { rank: 17, twitter: "itsamit2506", discord: "itsamit2506", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 85 },
        { rank: 18, twitter: "jamiuG01", discord: "jaygold5483", messages: 224, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 110 },
        { rank: 19, twitter: "mahnoor_zz", discord: "mahnoor_123", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 70 },
        { rank: 20, twitter: "medify5magic", discord: "samstar71", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 88 },
        { rank: 21, twitter: "nath_yaps", discord: "nath_yaps", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 95 },
        { rank: 22, twitter: "seymodcoal", discord: "seymodcoal", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 82 },
        { rank: 23, twitter: "Shinnnnn262", discord: "_saintwest", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 78 },
        { rank: 24, twitter: "SirGwritestoo_", discord: "sirgbillz", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 90 },
        { rank: 25, twitter: "TheCryptoUsman", discord: "cryptowithusman", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 85 },
        { rank: 26, twitter: "xwatiiiii", discord: "iamswatiiiii", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 75 },
        { rank: 27, twitter: "yoriichi_td1", discord: "yoriichi_td1", messages: 500, hasSog: true, suspicion: 100, redFlags: 0, daysInServer: 80 }
    ]
};

// Render the main evidence table
function renderEvidenceTable() {
    const tbody = document.getElementById('evidence-body');
    if (!tbody) return;
    
    tbody.innerHTML = evidenceData.allUsers.map(user => {
        const isLowActivity = user.messages < 100;
        const rowClass = isLowActivity ? 'low-messages' : '';
        
        return `
            <tr class="${rowClass}">
                <td>${user.rank}</td>
                <td><a href="https://twitter.com/${user.twitter}" target="_blank" rel="noopener">@${user.twitter}</a></td>
                <td>${user.discord}</td>
                <td class="${isLowActivity ? 'highlight' : ''}">${user.messages}</td>
                <td>${user.hasSog ? 'YES' : 'NO'}</td>
                <td class="highlight">${user.suspicion}/100</td>
                <td>${user.redFlags > 0 ? user.redFlags : '-'}</td>
            </tr>
        `;
    }).join('');
}

// Render detailed case studies with full proof
function renderCaseStudies() {
    const container = document.getElementById('detailed-proofs');
    if (!container) return;
    
    container.innerHTML = evidenceData.caseStudies.map(user => `
        <div class="proof-card">
            <div class="proof-header">
                <h4>@${user.twitter}</h4>
                <span class="suspicion-badge">${user.suspicion}/100 SUSPICION</span>
            </div>
            
            <div class="proof-stats">
                <div class="proof-stat">
                    <span class="stat-value">${user.messages}</span>
                    <span class="stat-label">Total Messages</span>
                </div>
                <div class="proof-stat">
                    <span class="stat-value">${user.daysInServer}</span>
                    <span class="stat-label">Days in Server</span>
                </div>
                <div class="proof-stat">
                    <span class="stat-value">${user.substantialMessages}</span>
                    <span class="stat-label">Substantial Msgs</span>
                </div>
                <div class="proof-stat">
                    <span class="stat-value">${user.avgMessageLength}</span>
                    <span class="stat-label">Avg Words/Msg</span>
                </div>
            </div>
            
            <div class="proof-section">
                <h5>Red Flags</h5>
                <ul class="red-flags-list">
                    ${user.redFlags.map(flag => `<li>${flag}</li>`).join('')}
                </ul>
            </div>
            
            <div class="proof-section">
                <h5>Channel Activity Breakdown</h5>
                <div class="channel-breakdown">
                    ${Object.entries(user.channelBreakdown).map(([channel, count]) => `
                        <div class="channel-bar">
                            <span class="channel-name">#${channel}</span>
                            <div class="bar-container">
                                <div class="bar" style="width: ${(count / user.messages) * 100}%"></div>
                            </div>
                            <span class="channel-count">${count}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            ${user.sampleMessages.length > 0 ? `
            <div class="proof-section">
                <h5>Sample Discord Messages</h5>
                <div class="message-samples">
                    ${user.sampleMessages.map(msg => `
                        <div class="sample-message">
                            <span class="msg-channel">#${msg.channel}</span>
                            <span class="msg-content">"${msg.content}"</span>
                            <span class="msg-words">${msg.wordCount} words</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            ${user.tweets.length > 0 ? `
            <div class="proof-section">
                <h5>Tweets Shared in Discord</h5>
                <div class="tweet-samples">
                    ${user.tweets.map(tweet => `
                        <div class="sample-tweet">
                            <a href="${tweet.url}" target="_blank" rel="noopener">${tweet.url}</a>
                            <p class="tweet-desc">${tweet.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="proof-verdict">
                <p>Joined server on <strong>${user.joinDate}</strong>. After <strong>${user.daysInServer} days</strong>, 
                only <strong>${user.messages} messages</strong> with an average of <strong>${user.avgMessageLength} words per message</strong>. 
                Yet they have the SOG role that supposedly requires weeks of dedicated activity.</p>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderEvidenceTable();
    renderCaseStudies();
});
