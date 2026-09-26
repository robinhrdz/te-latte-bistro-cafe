import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import type { MenuItem } from "../types";

export function useSpecialties() {
  const [specialties, setSpecialties] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    supabase
      .from("specialties")
      .select("name, description, price, image")
      .eq("active", true)
      .order("sort_order", { ascending: true })
      .then(({ data, error }) => {
        if (!mounted) return;
        if (error) {
          console.error(error);
          setError(error.message);
        } else {
          setSpecialties(data ?? []);
        }
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return { specialties, loading, error };
}