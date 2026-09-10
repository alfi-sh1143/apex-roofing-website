import React, { useState } from 'react';
import {
  Sparkles,
  Play,
  CheckCircle2,
  Clock,
  AlertTriangle,
  GitPullRequest,
  Calendar,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  Search,
  Bell
} from 'lucide-react';

export const DashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sprint' | 'workflows' | 'calendar' | 'analytics'>('sprint');
  const [isRunningWorkflow, setIsRunningWorkflow] = useState(false);
  const [workflowStep, setWorkflowStep] = useState(4);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    't-1': false,
    't-2': true,
    't-3': false,
    't-4': false
  });

  const handleSimulateWorkflow = () => {
    if (isRunningWorkflow) return;
    setIsRunningWorkflow(true);
    setWorkflowStep(1);

    setTimeout(() => setWorkflowStep(2), 700);
    setTimeout(() => setWorkflowStep(3), 1500);
    setTimeout(() => {
      setWorkflowStep(4);
      setIsRunningWorkflow(false);
    }, 2400);
  };

  const toggleTask = (id: string) => {
    setCompletedTasks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full bg-white border border-[#E2E8F0] rounded-2xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] overflow-hidden">
      {/* Top Application Bar */}
      <div className="bg-[#0F172A] text-white px-4 sm:px-6 py-3 flex items-center justify-between border-b border-[#1E293B]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
          </div>
          <div className="h-4 w-px bg-[#334155] mx-1 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-xs font-mono font-medium text-[#94A3B8] hidden sm:inline">
              flowdesk.workspace/sprint-34
            </span>
          </div>
        </div>

        {/* Global Search / Command Bar */}
        <div className="hidden md:flex items-center gap-2 bg-[#1E293B] border border-[#334155] rounded-lg px-3 py-1.5 text-xs text-[#94A3B8] w-72">
          <Search className="w-3.5 h-3.5 text-[#64748B]" />
          <span>Ask FlowDesk AI or press ⌘K...</span>
        </div>

        {/* User Presence */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&auto=format&fit=crop&q=80"
              alt="Elena"
              referrerPolicy="no-referrer"
              className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0F172A]"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&auto=format&fit=crop&q=80"
              alt="Marcus"
              referrerPolicy="no-referrer"
              className="inline-block h-6 w-6 rounded-full ring-2 ring-[#0F172A]"
            />
            <div className="h-6 w-6 rounded-full bg-[#2563EB] text-[10px] font-bold text-white flex items-center justify-center ring-2 ring-[#0F172A]">
              +4
            </div>
          </div>
          <div className="w-7 h-7 rounded-lg bg-[#1E293B] flex items-center justify-center text-[#94A3B8] hover:text-white cursor-pointer ml-1">
            <Bell className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>

      {/* Navigation Subheader & Tabs */}
      <div className="bg-[#F8FAFC] px-4 sm:px-6 py-2.5 border-b border-[#E2E8F0] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={() => setActiveTab('sprint')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'sprint'
                ? 'bg-white text-[#2563EB] shadow-xs border border-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Sprint & Tasks
          </button>
          <button
            onClick={() => setActiveTab('workflows')}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'workflows'
                ? 'bg-white text-[#2563EB] shadow-xs border border-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>AI Workflows</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          </button>
          <button
            onClick={() => setActiveTab('calendar')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'calendar'
                ? 'bg-white text-[#2563EB] shadow-xs border border-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Calendar Defense
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-white text-[#2563EB] shadow-xs border border-[#E2E8F0]'
                : 'text-[#64748B] hover:text-[#0F172A]'
            }`}
          >
            Predictive Velocity
          </button>
        </div>

        {/* Live AI Status Pill */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-[#475569] bg-white border border-[#E2E8F0] px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
          <span>Context Graph: <strong>Synchronized</strong></span>
        </div>
      </div>

      {/* Main Workspace Canvas */}
      <div className="p-4 sm:p-6 bg-white min-h-[420px]">
        {/* TAB 1: SPRINT & TASKS */}
        {activeTab === 'sprint' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                  <span>Sprint 34 &middot; Core AI Architecture</span>
                  <span className="text-xs font-medium bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-2 py-0.5 rounded">
                    Day 6 of 10
                  </span>
                </h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  AI velocity estimate: 94% probability to ship all 18 story points on schedule.
                </p>
              </div>

              <button
                onClick={() => {
                  setCompletedTasks(prev => ({
                    ...prev,
                    't-1': !prev['t-1'],
                    't-3': !prev['t-3']
                  }));
                }}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[#0F172A] border border-[#E2E8F0] px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3 h-3 text-[#64748B]" />
                <span>Auto-Rebalance Backlog</span>
              </button>
            </div>

            {/* Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1: In Progress */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    In Progress (3)
                  </span>
                  <span className="text-[11px] text-[#64748B]">8 pts</span>
                </div>

                <div className="space-y-2.5">
                  {/* Card 1 */}
                  <div
                    onClick={() => toggleTask('t-1')}
                    className={`bg-white border rounded-lg p-3 transition-all cursor-pointer ${
                      completedTasks['t-1']
                        ? 'border-[#10B981] bg-[#F0FDF4]'
                        : 'border-[#E2E8F0] hover:border-[#CBD5E1] shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold text-[#0F172A]">
                        Embed RAG Context Graph in Vector Store
                      </span>
                      {completedTasks['t-1'] ? (
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                      ) : (
                        <span className="text-[10px] font-mono bg-[#EFF6FF] text-[#2563EB] px-1.5 py-0.5 rounded font-bold">
                          P0
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                      <span className="inline-flex items-center gap-1">
                        <GitPullRequest className="w-3 h-3 text-[#2563EB]" /> PR #492
                      </span>
                      <span>&middot;</span>
                      <span className="text-[#2563EB] font-medium">AI Synthesized</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div
                    onClick={() => toggleTask('t-3')}
                    className="bg-white border border-[#E2E8F0] hover:border-[#CBD5E1] rounded-lg p-3 shadow-xs transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold text-[#0F172A]">
                        Calendar Deep Work Shield: Auto-Reject Conflict
                      </span>
                      <span className="text-[10px] font-mono bg-[#FEF3C7] text-[#D97706] px-1.5 py-0.5 rounded font-bold">
                        P1
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-[#64748B]">
                      <span className="inline-flex items-center gap-1 text-[#D97706]">
                        <AlertTriangle className="w-3 h-3" /> Blocked by PR #488
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Review & AI Verify */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    Review & AI Verify (2)
                  </span>
                  <span className="text-[11px] text-[#64748B]">5 pts</span>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-white border border-[#BFDBFE] rounded-lg p-3 shadow-xs">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <span className="text-xs font-semibold text-[#0F172A]">
                        Natural Language Workflow Dispatcher
                      </span>
                      <span className="text-[10px] font-mono bg-[#EFF6FF] text-[#2563EB] px-1.5 py-0.5 rounded font-bold">
                        P0
                      </span>
                    </div>
                    <p className="text-[11px] text-[#475569] mb-2">
                      Passed 48 automated edge-case unit test scenarios.
                    </p>
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-[#059669] font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Ready to merge
                      </span>
                      <span className="text-[#64748B]">Assignee: Elena R.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 3: Shipped / Done */}
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-[#059669] uppercase tracking-wider">
                    Completed Today (4)
                  </span>
                  <span className="text-[11px] text-[#64748B]">12 pts</span>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-white border border-[#E2E8F0] rounded-lg p-3 shadow-xs opacity-90">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#475569] line-through">
                        Slack Bot Webhook Resiliency & Exponential Backoff
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    </div>
                    <span className="text-[10px] text-[#059669] font-medium">
                      Shipped in release v2.4.1
                    </span>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-lg p-3 shadow-xs opacity-90">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-xs font-semibold text-[#475569] line-through">
                        Monte Carlo Velocity Simulator
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    </div>
                    <span className="text-[10px] text-[#059669] font-medium">
                      Deployed to production
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AUTONOMOUS WORKFLOWS */}
        {activeTab === 'workflows' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-[#F1F5F9]">
              <div>
                <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                  <span>Autonomous Workflow Engine</span>
                  <span className="text-xs font-medium bg-[#10B981]/10 text-[#059669] border border-[#10B981]/30 px-2 py-0.5 rounded">
                    3 Active Pipelines
                  </span>
                </h4>
                <p className="text-xs text-[#64748B] mt-0.5">
                  FlowDesk listens to webhooks and coordinates multi-step actions across your stack.
                </p>
              </div>

              <button
                onClick={handleSimulateWorkflow}
                disabled={isRunningWorkflow}
                className="inline-flex items-center gap-2 text-xs font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2 rounded-lg transition-colors cursor-pointer disabled:opacity-60"
              >
                {isRunningWorkflow ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>{isRunningWorkflow ? 'Executing Pipeline...' : 'Run Live Simulation'}</span>
              </button>
            </div>

            {/* Pipeline Execution Card */}
            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-5 mb-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2563EB] animate-pulse" />
                  <span className="text-xs font-bold text-[#0F172A]">
                    Pipeline: "Incident Auto-Triage & War Room Dispatch"
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#64748B]">Trigger: #prod-alerts Slack webhook</span>
              </div>

              {/* Progress Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                <div
                  className={`p-3 rounded-lg border transition-all ${
                    workflowStep >= 1
                      ? 'bg-white border-[#2563EB] text-[#0F172A]'
                      : 'bg-white/50 border-[#E2E8F0] text-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold">Step 1</span>
                    {workflowStep >= 1 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="text-xs font-semibold">Catch Alert</div>
                  <div className="text-[10px] text-[#64748B]">Slack webhook received</div>
                </div>

                <div
                  className={`p-3 rounded-lg border transition-all ${
                    workflowStep >= 2
                      ? 'bg-white border-[#2563EB] text-[#0F172A]'
                      : 'bg-white/50 border-[#E2E8F0] text-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold">Step 2</span>
                    {workflowStep >= 2 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="text-xs font-semibold">AI Root Cause</div>
                  <div className="text-[10px] text-[#64748B]">Traced to PR #4812</div>
                </div>

                <div
                  className={`p-3 rounded-lg border transition-all ${
                    workflowStep >= 3
                      ? 'bg-white border-[#2563EB] text-[#0F172A]'
                      : 'bg-white/50 border-[#E2E8F0] text-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold">Step 3</span>
                    {workflowStep >= 3 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="text-xs font-semibold">Dispatch GitHub Issue</div>
                  <div className="text-[10px] text-[#64748B]">Issue #5021 created</div>
                </div>

                <div
                  className={`p-3 rounded-lg border transition-all ${
                    workflowStep >= 4
                      ? 'bg-[#EFF6FF] border-[#BFDBFE] text-[#2563EB]'
                      : 'bg-white/50 border-[#E2E8F0] text-[#94A3B8]'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] mb-1">
                    <span className="font-bold">Step 4</span>
                    {workflowStep >= 4 ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#059669]" />
                    ) : (
                      <Clock className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <div className="text-xs font-semibold">Defend Calendar</div>
                  <div className="text-[10px] text-[#64748B]">On-call sync booked</div>
                </div>
              </div>

              {/* Output Result */}
              <div className="mt-4 p-3 bg-white border border-[#E2E8F0] rounded-lg flex items-center justify-between text-xs">
                <span className="text-[#334155]">
                  Execution duration: <strong>1.42s</strong> &middot; Saved ~45 mins manual triage
                </span>
                <span className="text-[#059669] font-bold">Status: 200 OK Completed</span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CALENDAR DEFENSE */}
        {activeTab === 'calendar' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                  <span>Autonomous Deep Work Defense</span>
                  <span className="text-xs font-semibold bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0] px-2 py-0.5 rounded">
                    +6.5 hrs Reclaimed This Week
                  </span>
                </h4>
                <p className="text-xs text-[#64748B]">
                  FlowDesk actively rebalances fragmented meetings to protect continuous cognitive flow.
                </p>
              </div>

              <span className="text-xs font-semibold text-[#2563EB]">Google Calendar Synced</span>
            </div>

            {/* Weekly Time Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
                  Thursday Morning
                </div>
                <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg mb-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2563EB] mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" /> Protected Focus Block
                    </span>
                    <span>09:00 - 12:30</span>
                  </div>
                  <p className="text-[11px] text-[#475569]">
                    3.5 hours uninterrupted focus reserved for PR #492 architecture implementation.
                  </p>
                </div>
                <div className="text-[11px] text-[#059669] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Auto-declined 2 conflicting non-urgent invites
                </div>
              </div>

              <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
                  Thursday Afternoon
                </div>
                <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg mb-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0F172A] mb-1">
                    <span>Sprint Review & Demo</span>
                    <span>14:00 - 14:45</span>
                  </div>
                  <p className="text-[11px] text-[#64748B]">
                    Consolidated from 3 separate fragmented update meetings into 1 synchronized demo.
                  </p>
                </div>
                <div className="text-[11px] text-[#2563EB] font-medium">
                  Pre-meeting briefing auto-generated & pinned
                </div>
              </div>

              <div className="border border-[#E2E8F0] rounded-xl p-4 bg-white">
                <div className="text-xs font-bold text-[#64748B] uppercase tracking-wider mb-2">
                  Friday Morning
                </div>
                <div className="p-3 bg-[#EFF6FF] border border-[#BFDBFE] rounded-lg mb-2">
                  <div className="flex items-center justify-between text-xs font-bold text-[#2563EB] mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" /> Protected Focus Block
                    </span>
                    <span>09:30 - 12:30</span>
                  </div>
                  <p className="text-[11px] text-[#475569]">
                    Zero meetings policy active. Slack status set to Focus mode automatically.
                  </p>
                </div>
                <div className="text-[11px] text-[#059669] font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Notifications muted during deep work
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: PREDICTIVE ANALYTICS */}
        {activeTab === 'analytics' && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <div>
                <h4 className="text-base font-bold text-[#0F172A] flex items-center gap-2">
                  <span>Monte Carlo Sprint Velocity Forecast</span>
                  <span className="text-xs font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] px-2 py-0.5 rounded">
                    Confidence: 94.8%
                  </span>
                </h4>
                <p className="text-xs text-[#64748B]">
                  Simulating 1,000 sprint iterations based on historic commit frequencies and PR review turnaround.
                </p>
              </div>

              <span className="text-xs font-bold text-[#059669] flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" /> +18% Velocity Trend
              </span>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
                <div className="text-[11px] text-[#64748B]">Predicted Ship Date</div>
                <div className="text-base font-bold text-[#0F172A]">Sept 18, 2026</div>
                <div className="text-[10px] text-[#059669]">2 days ahead of deadline</div>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
                <div className="text-[11px] text-[#64748B]">Avg PR Turnaround</div>
                <div className="text-base font-bold text-[#0F172A]">2.1 hours</div>
                <div className="text-[10px] text-[#059669]">-64% vs industry baseline</div>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
                <div className="text-[11px] text-[#64748B]">Cognitive Load Score</div>
                <div className="text-base font-bold text-[#0F172A]">Optimal (Low Risk)</div>
                <div className="text-[10px] text-[#059669]">No burnout signals detected</div>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3">
                <div className="text-[11px] text-[#64748B]">Automated Actions</div>
                <div className="text-base font-bold text-[#0F172A]">342 this sprint</div>
                <div className="text-[10px] text-[#2563EB]">18.4 engineer hours saved</div>
              </div>
            </div>

            {/* Visual Simulated Curve */}
            <div className="p-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl">
              <div className="flex items-center justify-between text-xs text-[#64748B] mb-2 font-mono">
                <span>Sprint Progress &middot; Projected vs Target</span>
                <span>Target: 18 Story Points</span>
              </div>
              <div className="w-full h-4 bg-[#E2E8F0] rounded-full overflow-hidden flex">
                <div className="h-full bg-[#2563EB] w-[68%]" title="Completed (68%)" />
                <div className="h-full bg-[#93C5FD] w-[26%]" title="In Review / Predicted (26%)" />
                <div className="h-full bg-slate-300 w-[6%]" title="Remaining" />
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#475569] mt-2">
                <span>Completed: 12 pts</span>
                <span className="text-[#2563EB] font-bold">Predicted finish: 18 pts by Friday</span>
                <span>Buffer: 2 pts</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Banner */}
      <div className="bg-[#F8FAFC] border-t border-[#E2E8F0] px-4 sm:px-6 py-2.5 flex items-center justify-between text-xs text-[#64748B]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#059669]" />
          <span>Interactive Preview: Click tabs or simulate triggers to inspect UI/UX architecture.</span>
        </div>
        <span className="hidden sm:inline font-mono text-[11px]">FlowDesk UI Engine v2.4</span>
      </div>
    </div>
  );
};
