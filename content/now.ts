/**
 * "Now" page — currently building / exploring.
 * Source: Resume ("Currently exploring") + GitHub repo recency.
 * Update this file when something changes.
 */

type Status = 'active' | 'paused' | 'queued';

export const nowContent = {
  lastUpdated: '2026-07-02',
  intro:
    "A live status board. Updated when something shifts. If it looks stale, it's stale — ping me.",
  doing: [
    {
      label: 'Shipping DevTrail v3',
      detail: 'Auth flow, journaling, AI weekly reports',
      status: 'active' as Status,
    },
    {
      label: 'Wrapping up Notion-clone',
      detail: 'Offline-first sync architecture on the backlog',
      status: 'active' as Status,
    },
    {
      label: 'College coursework',
      detail: 'Semester 6, CGPA holding at 8.1',
      status: 'active' as Status,
    },
  ],
  exploring: [
    { label: 'LangChain', status: 'active' as Status },
    { label: 'Agentic workflows', status: 'active' as Status },
    { label: 'System design fundamentals', status: 'paused' as Status },
    { label: 'DevOps / CI-CD', status: 'active' as Status },
    { label: 'TypeScript (properly)', status: 'active' as Status },
  ],
  recently: [
    {
      label: 'Finalist — HACK4SDG Hackathon, IIT Hyderabad',
      detail: 'AIESEC',
      date: 'Oct 2024',
    },
    {
      label: 'Salesforce Agentforce Specialist',
      detail: 'Trailhead Credential ID 7288380',
      date: '2025',
    },
    {
      label: 'Passed 17 public repos on GitHub',
      detail: 'github.com/nitinkapil25',
      date: 'mid-2026',
    },
  ],
};