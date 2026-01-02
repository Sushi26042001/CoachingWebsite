// src/AdminPanel.jsx
import React, { useState, useEffect, useMemo } from "react";
import {
  Image,
  BookOpen,
  MapPin,
  Star,
  HelpCircle,
  Phone,
  PlusCircle,
  Save,
  Trash2,
  FileText,
  FileArchive,
  File,
  FilePlus,
  Eye,
  Edit,
  X,
  XCircle
} from "lucide-react";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import DashboardSettings from "./DashboardSettings";
import PDFSettings from "./PDFSettings";
import QuizSettings from "./QuizSettings";
import ArticlesSettings from "./ArticlesSettings";

/* ---------------- Main Admin Panel with Tabs ---------------- */
const Settings = () => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: <FileText /> },
    { id: "pdfs", label: "PDFs & Notes", icon: <FileArchive /> },
    { id: "quiz", label: "Quiz", icon: <FilePlus /> },
    { id: "articles", label: "Articles", icon: <File /> },
  ];

  const [activeTab, setActiveTab] = useState("dashboard");

 
  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">⚙️ Admin Settings Panel</h1>
          <p className="text-sm text-gray-600 mt-1">Manage dashboards, PDFs, quizzes and articles</p>
        </div>
      </header>

      {/* Tabs */}
      <nav className="mb-6 bg-white rounded-xl p-1 flex gap-1 border border-gray-100 shadow-sm">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition font-medium text-sm ${t.id === activeTab ? "bg-blue-600 text-white shadow-md" : "text-gray-700 hover:bg-gray-50"
              }`}
          >
            <span className="opacity-90">{t.icon}</span>
            {t.label}
          </button>
        ))}
      </nav>

      <main>
        {/* Dashboard Tab */}
        {activeTab === "dashboard" && (
          <DashboardSettings/>
        )}

        {/* PDFs & Notes Tab */}
        {activeTab === "pdfs" && (
          <PDFSettings/>
        )}

        {/* Quiz Tab */}
        {activeTab === "quiz" && (
          <QuizSettings/>
        )}

        {/* Articles Tab */}
        {activeTab === "articles" && (
         <ArticlesSettings/>
        )}
      </main>
    </div>
  );
};

export default Settings;
