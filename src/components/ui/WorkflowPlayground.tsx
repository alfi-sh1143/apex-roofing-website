import React, { useState } from 'react';
import { WORKFLOW_PRESETS } from '../../data/flowDeskData';
import { Play, Sparkles, CheckCircle2, Clock, ArrowRight, RefreshCw, Cpu, Bot, Layers } from 'lucide-react';
import { Button } from './Button';

export const WorkflowPlayground: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(WORKFLOW_PRESETS[0].id);
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(4); // Default to showing full output, but can re-run

  const currentPreset = WORKFLOW_PRESETS.find(p => p.id === selectedPresetId) || WORKFLOW_PRESETS[0];

  const handleRun = () => {
    if (running) return;
    setRunning(true);
    setActiveStep(1);

    setTimeout(() => setActiveStep(2), 650);
    setTimeout(() => setActiveStep(3), 1300);
    setTimeout(() => {
      setActiveStep(4);
      setRunning(false);
    }, 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white border border-[#E2E8F0] rounded-2xl shadow-xl overflow-hidden">
      {/* Top Header */}
      <div className="bg-[#0F172A] text-white p-5 sm:p-6 border-b border-[#1E293B]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#2563EB]/20 border border-[#2563EB]/40 text-[#60A5FA] text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Workflow Engine</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Autonomous AI Workflow Demonstration
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Select a scenario below to watch how FlowDesk AI captures real-time triggers, reasons across tools, and dispatches coordinated actions.
            </p>
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={handleRun}
            disabled={running}
            leftIcon={running ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 fill-current" />}
          >
            {running ? 'Simulating Pipeline...' : 'Run Simulation'}
          </Button>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-[#1E293B]">
          {WORKFLOW_PRESETS.map(preset => {
            const isSelected = preset.id === selectedPresetId;
            return (
              <button
                key={preset.id}
                onClick={() => {
                  setSelectedPresetId(preset.id);
                  setActiveStep(4);
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'bg-[#1E293B] text-slate-300 hover:text-white hover:bg-[#334155]'
                }`}
              >
                {preset.title}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Simulation Stage */}
      <div className="p-6 sm:p-8 bg-[#F8FAFC]">
        {/* Trigger Header */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-4 sm:p-5 mb-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
                Incoming Webhook Trigger
              </span>
              <div className="text-sm sm:text-base font-bold text-[#0F172A] mt-0.5">
                {currentPreset.trigger}
              </div>
              <p className="text-xs text-[#64748B] mt-1">{currentPreset.description}</p>
            </div>

            <div className="inline-flex items-center gap-2 self-start sm:self-auto bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] px-3 py-1.5 rounded-lg text-xs font-semibold">
              <Clock className="w-3.5 h-3.5" />
              <span>Impact: {currentPreset.impactSavedTime}</span>
            </div>
          </div>
        </div>

        {/* Steps Visual Chain */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-6">
          {currentPreset.steps.map((step, idx) => {
            const isFinished = activeStep >= step.id;
            const isCurrent = running && activeStep === step.id;

            return (
              <div
                key={step.id}
                className={`relative p-4 rounded-xl border transition-all duration-200 ${
                  isFinished
                    ? 'bg-white border-[#2563EB]/40 shadow-xs'
                    : 'bg-white/60 border-[#E2E8F0] text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-mono text-[11px] font-bold text-[#64748B]">
                    0{step.id} / 04
                  </span>
                  {isCurrent ? (
                    <RefreshCw className="w-3.5 h-3.5 text-[#2563EB] animate-spin" />
                  ) : isFinished ? (
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                  ) : (
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                  )}
                </div>

                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                      step.actor === 'ai'
                        ? 'bg-[#EFF6FF] text-[#2563EB]'
                        : step.actor === 'integration'
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {step.actor}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B]">{step.timeMs}</span>
                </div>

                <h4 className="text-xs font-bold text-[#0F172A] mb-1.5 leading-snug">
                  {step.title}
                </h4>
                <p className="text-[11px] text-[#475569] leading-relaxed">
                  {step.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Synthesized Output Box */}
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-[#0F172A] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Grounded Workflow Output</span>
            </span>
            <span className="text-[11px] text-[#059669] font-bold bg-[#ECFDF5] border border-[#A7F3D0] px-2 py-0.5 rounded">
              Verification Verified
            </span>
          </div>

          <div className="p-4 bg-[#F8FAFC] border border-[#F1F5F9] rounded-lg text-xs sm:text-sm text-[#334155] leading-relaxed font-mono">
            {currentPreset.outputSummary}
          </div>
        </div>
      </div>
    </div>
  );
};
